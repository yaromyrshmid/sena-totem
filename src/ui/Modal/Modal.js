import React from "react";
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import Transition from 'react-transition-group/Transition';

import * as actions from '../../store/actions/index';
import "./Modal.css";

const Modal = props => {
  return (
    <Transition 
      mountOnEnter
      unmountOnExit
      in={props.show}
      timeout={500}
    >
      {state => {
        const cssClasses = state === 'entering' ? 'ModalOpen' : state === 'exiting' ? 'ModalClosed' : null;
        return (
          <div className={`Modal ${cssClasses}`}>
            <h1>Проблємка</h1>
              <div>
              <p className="errorMessage">{props.error.status}</p>
              <p className="errorMessage">{props.error.statusText}</p>
              </div>
            <button className="Button" onClick={props.hideModal}>
              <NavLink className="nav-link" to="/" exact>Повернутись</NavLink>
            </button>
          </div>
        )
      }}      
    </Transition>
  );
};

const mapStateToProps = state => {
  return {
    show: state.ui.gotError,
    error: state.ui.error
  }
}

const mapDispatchToProps = dispatch => {
  return {
    hideModal: () => dispatch(actions.hideModal())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
