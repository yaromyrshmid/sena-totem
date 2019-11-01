import * as actionTypes from "./actionTypes";
import axios from "../../axios";
import * as actions from "../../store/actions/index";

export const setDataExp = data => {
  return {
    type: actionTypes.SET_DATA_EXP,
    exp: data
  };
};

export const setDataInc = data => {
  return {
    type: actionTypes.SET_DATA_INC,
    inc: data
  };
};

export const setDataComplects = data => {
  return {
    type: actionTypes.SET_DATA_COMPLECTS,
    complects: data
  };
};

export const setDataAvailableComplects = data => {
  return {
    type: actionTypes.SET_DATA_AVAILABLE_COMPLECTS,
    availableComplects: data
  };
};

export const getDataEI = idToken => {
  return dispatch => {
    axios
      .get("/.json?auth=" + idToken)
      .then(res => {
        console.log(res.data);
        dispatch(setDataExp(res.data.balance.exp));
        dispatch(setDataInc(res.data.balance.inc));
        dispatch(setDataComplects(res.data.balance.complects));
        dispatch(setDataAvailableComplects(res.data.availableComplects));
      })
      .catch(error => {
        dispatch(actions.showModal(error.response));
      });
  };
};

export const createFormLists = expData => {
  const wares = [];
  const subwares = [];
  const exps = [];
  const colors = [];

  Object.keys(expData).map(key => {
    switch (expData[key].type) {
      case "Товар":
        if (!(wares.indexOf(expData[key].name) > -1)) {
          wares.push(expData[key].name);
        }
        break;
      case "Супутній товар":
        if (!(subwares.indexOf(expData[key].name) > -1)) {
          subwares.push(expData[key].name);
        }
        break;
      case "Витрата":
        if (!(exps.indexOf(expData[key].name) > -1)) {
          exps.push(expData[key].name);
        }
        break;
      default:
        break;
    }
    if (!(colors.indexOf(expData[key].color) > -1)) {
      colors.push(expData[key].color);
    }
  });
  wares.sort();
  subwares.sort();
  exps.sort();
  colors.sort();
  const lists = {
    wares: wares,
    subwares: subwares,
    exps: exps,
    colors: colors
  };
  return {
    type: actionTypes.CREATE_FORM_LISTS,
    lists: lists
  };
};
