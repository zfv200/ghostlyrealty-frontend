import React from 'react'
import { connect } from 'react-redux'

import GhostlyRealtyLogo from './GhostlyRealtyLogo'
import RecentSearchesContainer from './RecentSearchesContainer'
import SignInLink from './SignInLink'
import RegisterForm from './RegisterForm'
import SignInForm from './SignInForm'
import LogOutButton from './LogOutButton'
import NavBar from '../NavBar/NavBar'

import { Menu, Icon, Sidebar, Segment, Header, Image } from 'semantic-ui-react'

import styles from './UserHeader.css.js'

class UserHeader extends React.Component{
  state={
    visible: false
  }

  render(){
    const style = {height: '100vh'}
    const { visible } = this.state
    return (
      <Menu fixed="top" inverted>
        <Menu.Item>
          <GhostlyRealtyLogo />
        </Menu.Item>
        <Menu.Item>
          <Icon disabled={visible} onClick={this.props.handleSidePush} name="sidebar"/>
        </Menu.Item>
        <RecentSearchesContainer />
        <div className="right menu">
        <SignInForm title="Sign In" />
        <RegisterForm title='Register' />
        <LogOutButton />
        </div>
      </Menu>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    currentUser: state.userReducer.currentUser
  }
}

export default connect(mapStateToProps)(UserHeader)
