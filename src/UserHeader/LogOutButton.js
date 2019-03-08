import React from 'react'
import { logOutGhost } from '../actions/actions'
import { connect } from 'react-redux'

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

export default connect(null, {logOutGhost})(LogOutButton)
