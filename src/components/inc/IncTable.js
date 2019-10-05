import React from 'react';
import { Table } from 'react-bootstrap';
import { connect } from 'react-redux';
import axios from '../../axios';

import * as actions from '../../store/actions/index';


const IncTable = props => {
  const deleteRowHandler = (event) => {
    const id = event.target.id;
    axios.delete('/inc/' + id + '.json?auth=' + props.idToken)
    .then( res => {
      console.log(res);
    })
    .catch(error => {
      props.showModal(error.response);
    })
    const newIncData = {};
    for (const key in props.incData) {
      if (key !== id) {
        newIncData[key] = props.incData[key]
      }
    }
    props.setDataInc(newIncData);
  }


  const table = props.loaded ? (
    Object.keys(props.incData).reverse().map((incKey, index) => {
      const complect = props.incData[incKey].income.map((line, index) => {
        return (
          <tr key={`${incKey}_${index}`}>
            <td></td>
            <td></td>
            <td>{line.type}</td>
            <td>{line.name}</td>
            <td>{line.color}</td>
            <td>{line.quantity}</td>
            <td></td>
            <td></td>
          </tr>
        )
      })
      return (
        <tbody key={incKey}>
          <tr>
            <td>{index+1}</td>
            <td>{props.incData[incKey].time}</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td>{props.incData[incKey].price}</td>
            <td><button id={incKey} onClick={deleteRowHandler}>x</button></td>
          </tr>
          {complect}
        </tbody>
      )
    }) 
  ) : null;  
  
  return (
    <React.Fragment>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Дата</th>
            <th>Тип</th>
            <th>Назва</th>
            <th>Колір</th>
            <th>Кількість</th>
            <th>Ціна</th>
            <th>Видалити</th>           
          </tr>
        </thead>
        {table}
      </Table>
    </React.Fragment>
  )
}

const mapStateToProps = state => {
  return {
    incData: state.data.incData,
    loaded: state.data.loaded,
    idToken: state.auth.idToken
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setDataInc: (incData) => dispatch(actions.setDataInc(incData)),
    showModal: (response) => dispatch(actions.showModal(response))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(IncTable);