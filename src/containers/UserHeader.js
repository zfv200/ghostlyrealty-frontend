import React from 'react'
import { connect } from 'react-redux'

import GhostlyRealtyLogo from '../components/GhostlyRealtyLogo'
import RecentSearches from '../components/RecentSearches'
import SignInLink from '../components/SignInLink'
import RegisterLink from '../components/RegisterLink'
import LogOutButton from '../components/LogOutButton'

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
        <RecentSearches />
        {this.props.currentUser ? this.loggedInComps() : this.notLoggedInComps()}
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
