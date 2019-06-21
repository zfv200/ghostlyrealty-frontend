// import React from 'react'
import Popup from 'reactjs-popup'
import { signInButtonClick } from './userHeaderActions'
import { connect } from 'react-redux'
import '../SignInLink.css'
import withAuth from '../HOCs/withAuth'
import SignInForm from './SignInForm'
import { Menu } from 'semantic-ui-react'

// TODO: combine with register link

const SignInLink = (props) => {

  const handleClick = () => {
    props.signInButtonClick(true)
  }
  //
  // return (
  // )
}

const mapStateToProps = (state) => {
  return {
    signInError: state.userReducer.signInError,
    signInForm: state.userReducer.signInForm
  }
}

// <Menu.Item>
//   <button onClick={handleClick} className="button"> Sign In </button>
//   {props.signInForm &&
//     <SignInForm />
//   }
// </Menu.Item>


export default connect(mapStateToProps, { signInButtonClick})(withAuth(SignInLink, false))
