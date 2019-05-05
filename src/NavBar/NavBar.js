import React from 'react';
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom';
import SearchBar from './SearchBar.tsx'
import styles from './NavBar.css.js'
import CustomAgentLink from '../CustomAgentComps/CustomAgentLink'

import { Menu } from 'semantic-ui-react'

const NavBar = (props) => {
  console.log(props);
  return (
    <div>
      <Menu.Item>
      </Menu.Item>
      <Menu.Item>
      </Menu.Item>
      <Menu.Item>
      </Menu.Item>
      <Menu.Item>
        <NavLink onClick={props.onClick} to="/">Home</NavLink>
      </Menu.Item>
      <Menu.Item>
        <NavLink onClick={props.onClick} to="/mediums">Mediums</NavLink>
      </Menu.Item>
      {props.currentUser ? <Menu.Item><NavLink onClick={props.onClick} to="/myhouses">My Houses</NavLink></Menu.Item> : null}

      <CustomAgentLink onClick={props.onClick} path="/newhaunt" text="Add Haunt"/>
      <CustomAgentLink onClick={props.onClick} path="/myhaunts" text="My Haunts"/>
      <CustomAgentLink onClick={props.onClick} path="/dashboard" text="Dashboard"/>
      <Menu.Item>
        <SearchBar onClick={props.onClick}/>
      </Menu.Item>
    </div>
  );
};
//
// <Menu>
//   <div className="h3 bb bg-white ma0">
//     <div className="fl dib w-75 pl5 flex flex-row">
//       <NavLink className="nav-link" style={styles.searchBarChild} to="/">Home</NavLink>
//       <NavLink className="nav-link" style={styles.searchBarChild} to="/mediums">Mediums</NavLink>
//       {props.currentUser ? <NavLink className="nav-link" style={styles.searchBarChild} to="/myhouses">My Houses</NavLink> : null}
//       <CustomAgentLink path="/newhaunt" text="Add Haunt"/>
//       <CustomAgentLink path="/myhaunts" text="My Haunts"/>
//       <CustomAgentLink path="/dashboard" text="Dashboard"/>
//     </div>
//     <div className="fr dib w-25" style={styles.searchBar}>
//       <SearchBar />
//     </div>
//   </div>
// </Menu>

const mapStateToProps = (state) => {
  return {
    currentUser: state.userReducer.currentUser
  }
}

export default connect(mapStateToProps)(NavBar);
