import React from 'react'
import { NavLink } from 'react-router-dom';
import styles from '../NavBar/NavBar.css.js'
import agentWithAuth from '../HOCs/agentWithAuth'


const NewHauntLink = () => {
  return (
    <NavLink style={styles.searchBarChild} to="/newhaunt">Add Haunt</NavLink>
  )
}

export default agentWithAuth(NewHauntLink)
