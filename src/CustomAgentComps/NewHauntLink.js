import React from 'react'
import { NavLink } from 'react-router-dom';
import styles from '../NavBar/NavBar.css.js'
import agentWithAuth from '../HOCs/agentWithAuth'


const NewHauntLink = () => {
  return (
    <NavLink style={styles.searchBarChild} to="/newhaunt"><h2>Add Haunt</h2></NavLink>
  )
}

export default agentWithAuth(NewHauntLink)
