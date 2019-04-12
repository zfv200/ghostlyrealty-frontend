import React from 'react';
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom';
import SearchBar from './SearchBar.tsx'
import styles from './NavBar.css.js'
import CustomAgentLink from '../CustomAgentComps/CustomAgentLink'

const NavBar = (props) => {

  return (
    <div>
      <div className="h3 bb bg-white ma0">
        <div className="fl dib w-75 pl5 flex flex-row">
          <NavLink className="nav-link" style={styles.searchBarChild} to="/">Home</NavLink>
          <NavLink className="nav-link" style={styles.searchBarChild} to="/mediums">Mediums</NavLink>
          <NavLink className="nav-link" style={styles.searchBarChild} to="/myhouses">My Houses</NavLink>
          <CustomAgentLink path="/newhaunt" text="Add Haunt"/>
          <CustomAgentLink path="/myhaunts" text="My Haunts"/>
        </div>
        <div className="fr dib w-25" style={styles.searchBar}>
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
