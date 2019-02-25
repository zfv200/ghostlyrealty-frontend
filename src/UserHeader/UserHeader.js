import React from 'react'
import { connect } from 'react-redux'

import GhostlyRealtyLogo from './GhostlyRealtyLogo'
import RecentSearchesContainer from './RecentSearchesContainer'
import SignInLink from './SignInLink'
import RegisterLink from './RegisterLink'
import LogOutButton from './LogOutButton'

import styles from './UserHeader.css.js'

class UserHeader extends React.Component{

  notLoggedInComps = () => {
    return (
      <div style={styles.hRight}>
        <SignInLink />
        <RegisterLink />
      </div>
    )
  }

  loggedInComps = () => {
    return (
      <div style={styles.hRight}>
        <LogOutButton />
      </div>
    )
  }

  render(){
    return (
      <div style={styles.bannerType}>
        <GhostlyRealtyLogo />
        {localStorage.getItem('jwt') ? <RecentSearchesContainer /> : null}
        {localStorage.getItem('jwt') ? this.loggedInComps() : this.notLoggedInComps()}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    currentUser: state.userReducer.currentUser
  }
}

export default connect(mapStateToProps)(UserHeader)
