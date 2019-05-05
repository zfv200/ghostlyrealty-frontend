import React from 'react'
import { logOutGhost } from '../actions/actions'
import { connect } from 'react-redux'
import withAuth from '../HOCs/withAuth'
import styles from './UserHeader.css.js'
import { withRouter } from 'react-router-dom'
import { Menu } from 'semantic-ui-react'

const LogOutButton = (props) => {

  const paths = ["/newhaunt", "/dashboard", "/myhaunts", "/results", "/myhouses"]

  const logOut = () => {
    if (paths.includes(props.history.location.pathname)){
      props.history.push("/")
    }
    localStorage.clear()
    props.logOutGhost()
  }
  return (
    <Menu.Item>
      <div style={styles.logOutButton}>
        <button className="pointer f6 link dim ba ph3 pv2 mb2 dib black" id="logOutButton" onClick={logOut}>Log Out</button>
      </div>
    </Menu.Item>
  )
}

export default connect(null, {logOutGhost})(withRouter(withAuth(LogOutButton, true)))
