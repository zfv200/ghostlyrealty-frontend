import React from 'react'
import { connect } from 'react-redux'

import GhostlyRealtyLogo from '../components/GhostlyRealtyLogo'
import RecentSearches from '../components/RecentSearches'
import SignInLink from '../components/SignInLink'
import RegisterLink from '../components/RegisterLink'

class UserHeader extends React.Component{

  notLoggedInComps = () => {
    return (
      <div>
        <SignInLink />
        <RegisterLink />
      </div>
    )
  }

  loggedInComps = () => {
    return (
      <div>

      </div>
    )
  }

  render(){
    return (
      <div className="bannerType">
        <GhostlyRealtyLogo />
        <RecentSearches />
        {this.currentUser ? null : this.notLoggedInComps()}
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
