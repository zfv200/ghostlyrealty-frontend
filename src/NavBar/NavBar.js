import React from 'react';
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom';
import SearchBar from './SearchBar.tsx'
import styles from './NavBar.css.js'

const NavBar = (props) => {

  const agent = () =>{
    if (props.currentUser){
      return props.currentUser.roles.find(role=>role.name==="agent") ?
      <NavLink style={styles.searchBarChild} to="/newhaunt"><h2>Add Haunt</h2></NavLink>
      : null
    }
  }

  return (
    <div>
      <div style={styles.searchBar}>
        <NavLink style={styles.searchBarChild} to="/"><h2>Home</h2></NavLink>
        <NavLink style={styles.searchBarChild} to="/agents"><h2>Agents</h2></NavLink>
        { agent()}
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
