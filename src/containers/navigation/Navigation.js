import React from 'react';
import { NavLink } from 'react-router-dom';
import { Navbar, Nav, Image } from 'react-bootstrap';

import Logo from '../../assets/images/logo.jpg';
import './Navigation.css'

const Navigation = props => {

  return (
    <Navbar bg="dark" variant="dark">
      <NavLink to="/sena-totem" exact>
        <Navbar.Brand><Image src={Logo}/> </Navbar.Brand>
      </NavLink>
      <Nav className="mr-auto">
        <NavLink className="nav-link" to="/sena-totem" exact>Home</NavLink>
        {props.authState && <NavLink className="nav-link" to="/sena-totem/workarea" exact>Work Area</NavLink>}
        {props.authState && <button className="logout" onClick={props.onLogout}>Log Out</button >}
      </Nav>
    </Navbar>
  )
}

export default Navigation;