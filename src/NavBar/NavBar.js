import React from 'react';
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom';
import SearchBar from './SearchBar.tsx'
import styles from './NavBar.css.js'
import NewHauntLink from '../CustomAgentComps/NewHauntLink'

const NavBar = (props) => {

  return (
    <div>
      <div style={styles.searchBar}>
        <NavLink style={styles.searchBarChild} to="/"><h2>Home</h2></NavLink>
        <NavLink style={styles.searchBarChild} to="/agents"><h2>Agents</h2></NavLink>
        <NewHauntLink />
        <SearchBar />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    currentUser: state.userReducer.currentUser
  }
}

export default connect(mapStateToProps)(NavBar);
