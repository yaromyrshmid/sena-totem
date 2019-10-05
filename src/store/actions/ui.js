import * as actionTypes from './actionTypes';

export const showModal = (response) => {
  return {
    type: actionTypes.SHOW_MODAL,
    error: response
  };
};

export const hideModal = () => {
  return {
    type: actionTypes.HIDE_MODAL
  }
}