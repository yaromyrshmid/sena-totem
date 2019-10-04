import React, { useEffect } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import WorkArea from './containers/workArea/workArea';
import Auth from './containers/auth/Auth';
import Navigation from './containers/navigation/Navigation';
import Statistics from './containers/statistics/Statistics';
import Spinner from './ui/Spinner/Spinner'
import './App.css';
import * as actions from './store/actions/index';

const App = props => {
  useEffect(() => {
    props.authCheckState();
  }, []);


  return (
    <React.Fragment>
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
    authData: state.auth
  }
}

const mapDispatchToProps = dispatch => {
  return {
    authCheckState: () => dispatch(actions.authCheckState())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
