import React from 'react';
import { NavLink } from 'react-router-dom';
import SearchBar from './SearchBar.tsx'
import styles from './NavBar.css.js'

const NavBar = () => {
  return (
    <div>
      <div style={styles.searchBar}>
        <NavLink style={styles.searchBarChild} to="/"><h2>Home</h2></NavLink>
        <NavLink style={styles.searchBarChild} to="/agents"><h2>Agents</h2></NavLink>
        <SearchBar />
      </div>
    </div>
  );
};

export default NavBar;
