import React from 'react';
import { NavLink } from 'react-router-dom';
import SearchBar from './SearchBar'

const NavBar = () => {
  return (
    <div>
      <div className="searchBar">
        <div className="searchBarChild"> 
          <NavLink to="/">Home</NavLink>
          <NavLink to="/agents">Agents</NavLink>
          <SearchBar />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
