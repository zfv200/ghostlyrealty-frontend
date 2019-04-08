import React from 'react'
import { connect } from 'react-redux'
import styles from './UserHeader.css.js'
import { registerButtonClick } from './userHeaderActions.js'
import { registerGhost } from '../actions/actions'

class RegisterForm extends React.Component{
  state={
    username: '',
    password: '',
    confirmedPassword: '',
    medium: false,
    image: ''
  }

  handleClick = (e) => {
    if(e.target.parentElement.id!=="register-form" && e.target.parentElement.id!=="outer-popup" && e.target.parentElement.id!=="inner-outer-popup"){
      this.props.registerButtonClick(false)
    }
  }

  handleChange = (e) =>{
    this.setState({
      [e.target.id]: e.target.value
    })
  }

  handleCheck = (e) => {
    this.setState({
      medium: e.target.checked
    })
  }

  validatePassword = () => {
    return this.state.password===this.state.confirmedPassword ? true : false
  }

  handleSubmit = (e) => {
    // TODO: create a passwords don't match error
    e.preventDefault()
    if (this.validatePassword()){
      this.props.registerGhost(this.state.username, this.state.password, this.state.medium, this.state.image)
    }
  }

  componentWillUnmount(){
    this.props.registerButtonClick(false)
  }

  render(){
    return (
      <div id="outer-popup" onClick={this.handleClick} style={styles.SignInForm}>
        <div id="inner-outer-popup" style={styles.content}>
          <form id="register-form" style={styles.form} onSubmit={this.handleSubmit}>
            Username:
            <input id="username" className="ma2" value={this.state.username} type="text" onChange={this.handleChange}/>
            Medium?:
            <input id="medium" className="ma2" checked={this.state.medium} className="formChild" type="checkbox" onChange={this.handleCheck}/>
            <input id="image" className="ma2" value={this.state.image} className="formChild" type="text" onChange={this.handleChange}/>
            Password:
            <input id="password" className="ma2" value={this.state.password} type="password" onChange={this.handleChange}/>
            Confirm Password:
            <input id="confirmedPassword" className="ma2" value={this.state.confirmedPassword} type="password" onChange={this.handleChange}/>
            <button className="ma2 f6 link dim ph3 pv2 mb2 dib white bg-black" type="submit">Sign In</button>
          </form>
        </div>
      </div>
    )
  }

}

export default connect(null, {registerButtonClick, registerGhost})(RegisterForm)
