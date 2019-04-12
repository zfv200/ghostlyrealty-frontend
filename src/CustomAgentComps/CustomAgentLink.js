import React from 'react'
import { NavLink } from 'react-router-dom';
import styles from '../NavBar/NavBar.css.js'
import agentWithAuth from '../HOCs/agentWithAuth'


const CustomAgentLink = (props) => {
  return (
    <NavLink className="nav-link" style={styles.searchBarChild} to={props.path}>{props.text}</NavLink>
  )
}

export default agentWithAuth(CustomAgentLink)
