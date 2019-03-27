import React from 'react'
import { connect } from 'react-redux'

import GhostlyRealtyLogo from './GhostlyRealtyLogo'
import RecentSearchesContainer from './RecentSearchesContainer'
import SignInLink from './SignInLink'
import RegisterLink from './RegisterLink'
import LogOutButton from './LogOutButton'

import styles from './UserHeader.css.js'

class UserHeader extends React.Component{

  render(){
    return (
      <div style={styles.bannerType}>
        <GhostlyRealtyLogo />
        <RecentSearchesContainer />
        <div style={styles.hRight}>
          <SignInLink />
          <RegisterLink />
        </div>
        <LogOutButton />
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
