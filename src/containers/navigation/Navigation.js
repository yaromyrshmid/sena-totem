import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = props => {

  return (
    <div>
      <NavLink to="/" exact>Home</NavLink>
      {props.authState && <NavLink to="/workarea" exact>Work Area</NavLink>}
      {props.authState && <button onClick={props.onLogout}>Log Out</button >}
    </div>
  )
}

export default Navigation;