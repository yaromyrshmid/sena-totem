import * as actionTypes from '../actions/actionTypes';

const initialState = {
  idToken: localStorage.getItem('token'),
  userId: localStorage.getItem('userId'),
  signedIn: false,
  loading: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.LOG_IN_START:
      return {
        ...state,        
        loading: true
      };
    case actionTypes.LOG_IN_SUCCESS:
      return {
        ...state,
        idToken: action.idToken,
        userId: action.userId,
        signedIn: true,
        loading: false
      };
    case actionTypes.LOG_OUT:
      return {
        ...state,
        idToken: null,
        userId: null,
        signedIn: false
      };
    default:
      return state;
  }
};

export default reducer;