import React from 'react'
import Popup from 'reactjs-popup'
import { signInButtonClick } from './userHeaderActions'
import { connect } from 'react-redux'
import '../SignInLink.css'
import withAuth from '../HOCs/withAuth'
import SignInForm from './SignInForm'

// TODO: combine with register link

class SignInLink extends React.Component {

  handleClick = () => {
    this.props.signInButtonClick(true)
  }

  render(){
    return (
      <div>
        <button onClick={this.handleClick} className="button"> Sign In </button>
        {this.props.signInForm &&
          <SignInForm />
        }
      </div>
  )}
}

const mapStateToProps = (state) => {
  return {
    signInError: state.userReducer.signInError,
    signInForm: state.userReducer.signInForm
  }
}



export default connect(mapStateToProps, { signInButtonClick})(withAuth(SignInLink, false))
