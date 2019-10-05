import React from 'react';
import { connect } from 'react-redux';
import Transition from 'react-transition-group/Transition';

import * as actions from '../../store/actions/index';
import './Backdrop.css';

const Backdrop = (props) => {    
    return (
      <Transition 
      mountOnEnter
      unmountOnExit
      in={props.show}
      timeout={0}
    >
      {state => {
        const cssClasses = state === 'entered' ? 'BackdropOpen' : state === 'exited' ? 'BackdropClosed' : null;
        return (
          <div 
          className={`Backdrop ${cssClasses}`} 
          onClick={props.hideModal}>
          </div>
        )
      }}      
    </Transition>
    )     
};

const mapStateToProps = state => {
  return {
    show: state.ui.gotError,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    hideModal: () => dispatch(actions.hideModal())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Backdrop);