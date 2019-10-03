import * as actionTypes from '../actions/actionTypes';

const initialState = {
  expData: {},
  incData: {},
  complectsData: {},
  lists: {    
    wares: [],
    subwares: [],
    exps: [],
    colors: []
  },
  loaded: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_DATA_EXP:
      return {
        ...state,
        expData: action.exp,
        loaded: true
      };
    case actionTypes.SET_DATA_INC:
      return {
        ...state,
        incData: action.inc,
        loaded: true
      };
    case actionTypes.SET_DATA_COMPLECTS:
      return {
        ...state,
        complectsData: action.complects,
        loaded: true
      }
    case actionTypes.CREATE_FORM_LISTS:
      return {        
        ...state,
        lists: action.lists
      };
    default:
      return state;
  }
};

export default reducer;