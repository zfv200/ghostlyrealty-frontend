import React from 'react'
import { logOutGhost } from '../actions/actions'
import { connect } from 'react-redux'
import withAuth from '../HOCs/withAuth'

const LogOutButton = (props) => {

  const logOut = () => {
    localStorage.clear()
    props.logOutGhost()
  }

  return (
    <div>
      <button id="logOutButton" onClick={logOut}><h3>Log Out</h3></button>
    </div>
  )
}

export default connect(null, {logOutGhost})(withAuth(LogOutButton, true))
