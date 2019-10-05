import React, { useEffect } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import WorkArea from './containers/workArea/workArea';
import Auth from './containers/auth/Auth';
import Navigation from './containers/navigation/Navigation';
import Statistics from './containers/statistics/Statistics';
import Spinner from './ui/Spinner/Spinner';
import Backdrop from './ui/Backdrop/Backdrop';
import Modal from './ui/Modal/Modal';
import './App.css';
import * as actions from './store/actions/index';

const App = props => {
  useEffect(() => {
    props.authCheckState();
  }, []);


  return (
    <React.Fragment>
      <Modal />
      <Backdrop show={props.gotError} />
      <Navigation />
      <Switch>        
        <Route path="/workarea" ><WorkArea /></Route>      
        <Route path="/" >
          {!props.authData.signedIn && !props.authData.loading && <Auth /> }
          {props.authData.loading && <Spinner />}
          {props.authData.signedIn && !props.authData.loading && <Statistics />}
        </Route>
      </Switch>
      {props.authData.signedIn && <Redirect to="/workarea" />}
    </React.Fragment>
  );
}

const mapStateToProps = state => {
  return {
    authData: state.auth,
    gotError: state.ui.gotError,
    error: state.ui.error
  }
}

const mapDispatchToProps = dispatch => {
  return {
    authCheckState: () => dispatch(actions.authCheckState())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
