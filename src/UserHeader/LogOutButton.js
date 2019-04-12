import React from 'react'
import { logOutGhost } from '../actions/actions'
import { connect } from 'react-redux'
import withAuth from '../HOCs/withAuth'
import styles from './UserHeader.css.js'
import { withRouter } from 'react-router-dom'

const LogOutButton = (props) => {

  const logOut = () => {
    if (props.history.location.pathname === "/newhaunt" || props.history.location.pathname === "/myhaunts" || props.history.location.pathname === "/results"){
      props.history.push("/")
    }
    localStorage.clear()
    props.logOutGhost()
  }
  return (
    <div style={styles.logOutButton}>
      <button className="pointer" id="logOutButton" onClick={logOut}>Log Out</button>
    </div>
  )
}

export default connect(null, {logOutGhost})(withRouter(withAuth(LogOutButton, true)))
