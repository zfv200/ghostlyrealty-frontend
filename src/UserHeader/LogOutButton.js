import React from 'react'
import { logOutGhost } from '../actions/actions'
import { connect } from 'react-redux'
import withAuth from '../HOCs/withAuth'
import styles from './UserHeader.css.js'

const LogOutButton = (props) => {

  const logOut = () => {
    localStorage.clear()
    props.logOutGhost()
  }
  return (
    <div style={styles.logOutButton}>
      <button className="pointer" id="logOutButton" onClick={logOut}>Log Out</button>
    </div>
  )
}

export default connect(null, {logOutGhost})(withAuth(LogOutButton, true))
