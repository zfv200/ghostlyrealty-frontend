import React from 'react';
import { NavLink } from 'react-router-dom';
import SearchBar from './SearchBar'

const NavBar = () => {
  return (
    <div>
      <div className="searchBar">
        <NavLink className="searchBarChild" to="/"><h2>Home</h2></NavLink>
        <NavLink className="searchBarChild" to="/agents"><h2>Agents</h2></NavLink>
        <SearchBar />
      </div>
    </div>
  );
};

export default NavBar;
