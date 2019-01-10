import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className="container">
      <div className="navbar, homepagecomps">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/agents">Agents</NavLink>
      </div>
    </div>
  );
};

export default NavBar;
