import * as actionTypes from './actionTypes';
import axios from 'axios';
import * as actions from '../../store/actions/index';

export const logInStart = () => {
  return {
    type: actionTypes.LOG_IN_START
  }
}

export const loginSuccess = (token, userId) => {
  return {
    type: actionTypes.LOG_IN_SUCCESS,
    idToken: token,
    userId: userId
  }
}

export const logOut = () => {
  localStorage.removeItem('token');
  localStorage.removeItem('expirationDate');
  localStorage.removeItem('userId');
  return {
    type: actionTypes.LOG_OUT
  };
};

export const checkLogoutTimeout = (expirationTime) => {
  return dispatch => {
    setTimeout(() => {
      dispatch(logOut());
    }, expirationTime * 1000)
  };
};

export const logInLoadingOff = () => {
  return {
    type:actionTypes.LOG_IN_LOADING_OFF
  }
}

export const logIn = (values) => {
  return dispatch => {
    dispatch(logInStart());
    values.returnSecureToken = true;
    axios.post('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDFX9LAlOi-6ONPEXG3hw22qJT5aIo91Z4', values)
    .then(response => {
      const expirationDate = new Date(new Date().getTime() + response.data.expiresIn * 1000);
      localStorage.setItem('token', response.data.idToken);
      localStorage.setItem('userId', response.data.localId);
      localStorage.setItem('expirationDate', expirationDate);
      
      dispatch(loginSuccess(response.data.idToken, response.data.localId));
      dispatch(checkLogoutTimeout(response.data.expiresIn));
    })
    .catch(error => {
      console.log(error.response);
      dispatch(actions.showModal(error.response));
      dispatch(logInLoadingOff());
    })
  };
}

export const authCheckState = () => {
  return dispatch => {
    const token = localStorage.getItem('token');
    if (!token) {
      dispatch(logOut());
    } else {
      const expirationDate = new Date(localStorage.getItem('expirationDate'));
      if (expirationDate <= new Date()) {
        dispatch(logOut());
      } else {
        const userId = localStorage.getItem('userId');
        dispatch(loginSuccess (token, userId));
        dispatch(checkLogoutTimeout((expirationDate.getTime() - new Date().getTime())/1000));
      };
    };
  };
};