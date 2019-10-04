import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { Navbar, Nav, Image } from 'react-bootstrap';

import Logo from '../../assets/images/logo.jpg';
import './Navigation.css';
import * as actions from '../../store/actions/index';

const Navigation = props => {

  return (
    <Navbar bg="dark" variant="dark">
      <NavLink to="/" exact>
        <Navbar.Brand><Image src={Logo}/> </Navbar.Brand>
      </NavLink>
      <Nav className="mr-auto">
        <NavLink className="nav-link" to="/" exact>Home</NavLink>
        {props.authState && <NavLink className="nav-link" to="/workarea" exact>Work Area</NavLink>}
        {props.authState && <button className="logout" onClick={props.logOut}>Log Out</button >}
      </Nav>
    </Navbar>
  )
}

const mapStateToProps = state => {
  return {
    authState: state.auth.signedIn
  }
}

const mapDispatchToProps = dispatch => {
  return {
    logOut: () => dispatch(actions.logOut()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);