import React from 'react'
import { connect } from 'react-redux'

import GhostlyRealtyLogo from './GhostlyRealtyLogo'
import RecentSearchesContainer from './RecentSearchesContainer'
import SignInLink from './SignInLink'
import RegisterLink from './RegisterLink'
import LogOutButton from './LogOutButton'

class UserHeader extends React.Component{

  notLoggedInComps = () => {
    return (
      <div className="hRight">
        <SignInLink />
        <RegisterLink />
      </div>
    )
  }

  loggedInComps = () => {
    return (
      <div className="hRight">
        <LogOutButton />
      </div>
    )
  }

  render(){
    return (
      <div className="bannerType">
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
