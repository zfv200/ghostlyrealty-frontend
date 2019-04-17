import React from 'react'
import { connect } from 'react-redux'

import GhostlyRealtyLogo from './GhostlyRealtyLogo'
import RecentSearchesContainer from './RecentSearchesContainer'
import SignInLink from './SignInLink'
import RegisterForm from './RegisterForm'
import SignInForm from './SignInForm'
import LogOutButton from './LogOutButton'

import styles from './UserHeader.css.js'

class UserHeader extends React.Component{

  render(){
    return (
      <div className="relative z-2" style={styles.bannerType}>
        <GhostlyRealtyLogo />
        <RecentSearchesContainer />
        <div style={styles.hRight}>
          <SignInForm title="Sign In" />
          <RegisterForm title='Register' />
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
