import React from 'react'
import Popup from 'reactjs-popup'
import withAuth from '../HOCs/withAuth'
import RegisterForm from './RegisterForm'
import { connect } from 'react-redux'
import { registerButtonClick } from './userHeaderActions.js'
import '../SignInLink.css'

const RegisterLink = (props) => {

  const handleClick = () => {
    props.registerButtonClick(true)
  }

  return (
    <div>
      <button onClick={handleClick} className="button"> Register </button>
      {props.registerForm &&
        <RegisterForm />
      }
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    registerForm: state.userReducer.registerForm
  }
}

export default connect(mapStateToProps, {registerButtonClick})(withAuth(RegisterLink, false))
