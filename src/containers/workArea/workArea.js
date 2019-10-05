import React, { useState, useEffect } from 'react';
import { Tabs, Tab } from 'react-bootstrap';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';


import ExpForm from '../../components/exp/ExpForm';
import ExpTable from '../../components/exp/ExpTable';
import IncForm from '../../components/inc/IncForm';
import IncTable from '../../components/inc/IncTable';
import Storage from '../storage/Storage';
import ComplectsForm from '../complects/ComplectsForm';
import ComplectsTable from '../complects/ComplectsTable';
import './workArea.css';
import './Forms.css';
import * as actions from '../../store/actions/index';

const WorkArea = props => {
  //З серва тягну дані для наповнення 
  useEffect(() => {
    props.getDataEI(props.authData.idToken);
  }, [props.gotError] )

  //На основі даних з серва хочу замутити новий стейт
  useEffect(() => {
    if (props.expData && Object.keys(props.expData).length > 0 ) {
      props.createFormLists(props.expData)
    }
  }, [props.expData])  

  return (
    <React.Fragment>
      <Tabs defaultActiveKey="storage" id="uncontrolled-tab-example">
        <Tab eventKey="exp" title="Витрати">
          <ExpForm />
          <ExpTable />
        </Tab>
        <Tab eventKey="inc" title="Доходи">
          <IncForm />
          <IncTable />
        </Tab>
        <Tab eventKey="storage" title="Склад">
          <Storage />
        </Tab>
        <Tab eventKey="complects" title="Комплекти">
          <ComplectsForm />
          <ComplectsTable />
        </Tab>
      </Tabs>
      {!props.authData.signedIn && <Redirect to="/sena-totem" />}
    </React.Fragment>
  )
}

const mapStateToProps = state => {
  return {
    authData: state.auth,
    expData: state.data.expData,
    incData: state.data.incData,
    gotError: state.ui.gotError
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getDataEI: (idToken) => dispatch(actions.getDataEI(idToken)),
    createFormLists: (expData) => dispatch(actions.createFormLists(expData))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(WorkArea);