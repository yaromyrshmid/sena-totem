import React, { useState, useEffect } from 'react';
import { Tabs, Tab } from 'react-bootstrap';
import { Redirect } from 'react-router-dom';
import axios from '../../axios';

import Exp from '../exp/Exp';
import Inc from '../inc/Inc';
import Storage from '../storage/Storage';
import './workArea.css';
import './Forms.css'

const WorkArea = props => {
  //Ставлю стейт нал
  const [expData, setExpData] = useState({});
  const [incData, setIncData] = useState(null);
  const [showError, setShowError] = useState(false);
  const [formList, setFormList] = useState({
    wares: [],
    subwares: [],
    exps: [],
    colors: []
  });
  //З серва тягну дані для наповнення 
  useEffect(() => {
    axios.get('/.json?auth=' + props.authData.idToken)
    .then( res => {
      console.log(res);
      setExpData(res.data.exp);
      setIncData(res.data.inc);
    })
    .catch(error => {
      console.log(error);
    })
  }, [showError] )
  //На основі даних з серва хочу замутити новий стейт
  useEffect(() => {
    if (expData && Object.keys(expData).length > 0 ) {
      const list = {
        wares: [],
        subwares: [],
        exps: [],
        colors: []
      }
      Object.keys(expData).map(key => {
        switch (expData[key].type) {
          case 'Товар':
          if (!(list.wares.indexOf(expData[key].name) > -1)) {
            list.wares.push(expData[key].name)
          };
          break;
          case 'Супутній товар':
            if (!(list.subwares.indexOf(expData[key].name) > -1)) {
              list.subwares.push(expData[key].name)
            };
          break;
          case 'Витрата':
            if (!(list.exps.indexOf(expData[key].name) > -1)) {
              list.exps.push(expData[key].name)
            };
          break;
          default:
            break;
        }
        if (!(list.colors.indexOf(expData[key].color) > -1)) {
          list.colors.push(expData[key].color)
        };
      });
      list.wares.sort();
      list.subwares.sort();
      list.exps.sort();
      list.colors.sort();
      setFormList(list);
    }
  }, [expData])

  const onFormSubmitHandlerExp = (values)  => {
    axios.post('/exp.json?auth=' + props.authData.idToken, values)
    .then(response => {
      console.log(response);
      const newExpData = {
        ...expData,
        [response.data.name]: values
      };
      setExpData(newExpData);
    })
    .catch(error => {
      console.log(error);
      setShowError(true);
    })
  }

  const onFormSubmitHandlerInc = (values)  => {
    axios.post('/inc.json?auth=' + props.authData.idToken, values)
    .then(response => {
      console.log(response);
      const newIncData = {
        ...incData,
        [response.data.name]: values
      };
      setIncData(newIncData);
    })
    .catch(error => {
      console.log(error);
      setShowError(true);
    })
  }

  const onDeleteRowHandlerExp = (event) => {
    const id = event.target.id;
    axios.delete('/exp/' + id + '.json?auth=' + props.authData.idToken)
    .then( res => {
      console.log(res);
    })
    .catch(error => {
      console.log(error);
      setShowError(true);
    })
    const newExpData = {};
    for (const key in expData) {
      if (key !== id) {
        newExpData[key] = expData[key]
      }
    }
    setExpData(newExpData);
  }

  const onDeleteRowHandlerInc = (event) => {
    const id = event.target.id;
    axios.delete('/inc/' + id + '.json?auth=' + props.authData.idToken)
    .then( res => {
      console.log(res);
    })
    .catch(error => {
      console.log(error);
      setShowError(true);
    })
    const newIncData = {};
    for (const key in incData) {
      if (key !== id) {
        newIncData[key] = incData[key]
      }
    }
    setIncData(newIncData);
  }

  return (
    <React.Fragment>
      <Tabs defaultActiveKey="storage" id="uncontrolled-tab-example">
        <Tab eventKey="exp" title="Витрати">
          <Exp 
            expData={expData}
            onFormSubmitHandler={onFormSubmitHandlerExp}
            onDeleteRowHandler={onDeleteRowHandlerExp}
            list={formList}
          />
        </Tab>
        <Tab eventKey="inc" title="Доходи">
          <Inc
            incData={incData}
            onFormSubmitHandler={onFormSubmitHandlerInc}
            onDeleteRowHandler={onDeleteRowHandlerInc}
            list={formList}
          />
        </Tab>
        <Tab eventKey="storage" title="Склад">
          <Storage expData={expData} incData={incData}/>
        </Tab>
      </Tabs>
      {!props.authData.signedIn && <Redirect to="/" />}
    </React.Fragment>
  )
}

export default WorkArea;