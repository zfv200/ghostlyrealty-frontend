import React from 'react';
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom';
import SearchBar from './SearchBar.tsx'
import styles from './NavBar.css.js'
import NewHauntLink from '../CustomAgentComps/NewHauntLink'

const NavBar = (props) => {

  return (
    <div>
      <div className="h3 bb bg-white ma0" style={styles.searchBar}>
        <div className="dib pl5">
          <NavLink style={{padding: "0 18px", height: "50px"}} to="/">Home</NavLink>
          <NavLink style={styles.searchBarChild} to="/agents">Agents</NavLink>
          <NewHauntLink />
        </div>
        <div className="dib fr pr5">
          <SearchBar />
        </div>
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
