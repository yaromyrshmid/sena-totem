import * as actionTypes from '../actions/actionTypes';

const initialState = {
  gotError: false,
  error: ''
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SHOW_MODAL:
      return {
        ...state,
        gotError: true,
        error: action.error
      };
    case actionTypes.HIDE_MODAL:
      return {
        ...state,
        gotError: false
      }
    default:
      return state;
  }
};

export default reducer;