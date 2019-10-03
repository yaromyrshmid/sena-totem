import * as actionTypes from '../actions/actionTypes';

const initialState = {
  expTable: {},
  incTable: {},
  totalStatsTable: {},
  incErrors: [],
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
    case actionTypes.COUNT_TOTAL_STATS:
      return {
        ...state,
        totalStatsTable: action.totalStatsTable
      };
    case actionTypes.CHECK_FOR_INC_ERRORS:
      return {
        ...state,
        incErrors: action.incErrors
      };
    default:
      return state;
  }
};

export default reducer;