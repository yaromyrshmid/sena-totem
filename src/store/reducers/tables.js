import * as actionTypes from '../actions/actionTypes';

const initialState = {
  expTable: {},
  incTable: {},
  loaded: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.CREATE_EXP_TABLE:
      return {
        ...state,
        expTable: action.expTable,
        loaded: true
      };
    case actionTypes.CREATE_INC_TABLE:
      return {
        ...state,
        incTable: action.incTable,
        loaded: true
      };
    default:
      return state;
  }
};

export default reducer;