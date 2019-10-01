import React, { useState, useEffect } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import axios from 'axios';

import WorkArea from './containers/workArea/workArea';
import Auth from './containers/auth/Auth';
import Navigation from './containers/navigation/Navigation';
import './App.css';

const App = () => {
  const [authData, setAuthData] = useState({
    idToken: localStorage.getItem('token'),
    userId: localStorage.getItem('userId'),
    signedIn: localStorage.getItem('signedIn'),
  });

  const loginHandler = (values)  => {
    values.returnSecureToken = true;
    axios.post('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDFX9LAlOi-6ONPEXG3hw22qJT5aIo91Z4', values)
    .then(response => {
      const expirationDate = new Date(new Date().getTime() + response.data.expiresIn * 1000);
      localStorage.setItem('token', response.data.idToken);
      localStorage.setItem('expirationDate', expirationDate);
      localStorage.setItem('userId', response.data.localId);
      localStorage.setItem('signedIn', true)
      const newAuthData = {
        idToken: response.data.idToken,
        userId: response.data.localId,
        refreshToken: response.data.refreshToken,
        signedIn: true
      }
      setAuthData(newAuthData);
      setTimeout(() => {logoutHandler()}, response.data.expiresIn * 1000);

    })
    .catch(error => {
      console.log(error);
      
    })
  }

  const logoutHandler = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('expirationDate');
    localStorage.removeItem('userId');
    localStorage.removeItem('signedIn');
    setAuthData({
      idToken: '',
      userId: '',
      signedIn: ''
    });
  }

  return (
    <React.Fragment>
      <Navigation authState={authData.signedIn} onLogout={logoutHandler}/>
      <Switch>        
        <Route path="/sena-totem/workarea" ><WorkArea authData={authData}/></Route>      
        <Route path="/" >
          {authData.signedIn ? <div></div> :
          <Auth submitHandler={loginHandler} token={authData.idToken}/> }
          </Route>
      </Switch>
      {authData.signedIn && <Redirect to="/sena-totem/workarea" />}
    </React.Fragment>
  );
}

export default App;
