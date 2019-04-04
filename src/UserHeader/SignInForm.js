import React from 'react'
import styles from './UserHeader.css.js'
import { loginGhost } from '../actions/actions'
import { connect } from 'react-redux'
import { signInButtonClick } from './userHeaderActions'

class SignInForm extends React.Component{
  state={
    username: '',
    password: ''
  }

  handleClick = (e) => {
    if(e.target.parentElement.id!=="sign-in-form" && e.target.parentElement.id!=="outer-popup" && e.target.parentElement.id!=="inner-outer-popup"){
      this.props.signInButtonClick(false)
    }
  }

  handleChange = (e) =>{
    this.setState({
      [e.target.id]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.setState({
      password: ''
    })
    this.props.loginGhost(this.state.username, this.state.password)
  }

  componentWillUnmount(){
    this.props.signInButtonClick(false)
  }

  render(){
    return (
      <div id="outer-popup" onClick={this.handleClick} style={styles.SignInForm}>
        <div id="inner-outer-popup" style={styles.content}>
          <form id="sign-in-form" style={styles.form} onSubmit={this.handleSubmit}>
            Username:
            <input id="username" className="ma2" value={this.state.username} type="text" onChange={this.handleChange}/>
            Password:
            <input id="password" className="ma2" value={this.state.password} type="password" onChange={this.handleChange}/>
            <button id="sign-in-submit" className="ma2 f6 link dim ph3 pv2 mb2 dib white bg-black" type="submit">Sign In</button>
          </form>
        </div>
      </div>
    )
  }
}

export default connect(null, { signInButtonClick, loginGhost })(SignInForm)
