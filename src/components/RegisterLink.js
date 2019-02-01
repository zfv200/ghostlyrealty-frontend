import React from 'react'
import Popup from 'reactjs-popup'
import { connect } from 'react-redux'
import { registerGhost } from '../actions/actions'
import '../SignInLink.css'

class RegisterLink extends React.Component{
  state={
    username: '',
    password: '',
    confirmedPassword: ''
  }

  handleChange = (e) =>{
    this.setState({
      [e.target.id]: e.target.value
    })
  }

  validatePassword = () => {
    return this.state.password===this.state.confirmedPassword ? true : false
  }

  handleSubmit = (close) => {
    // TODO: create a passwords don't match error
    if (this.validatePassword()){
      this.props.registerGhost(this.state.username, this.state.password, close)
    }
  }

  render(){
    return (
      <Popup trigger={<button className="button"> Register </button>} modal>
      {close => (
        <div className="modal">
          <a className="close" onClick={close}>
          &times;
          </a>
          <div className="header"> Register! </div>
          <div className="content">
          <form className="signUpForm" onSubmit={(e)=>{
            e.preventDefault()
            this.handleSubmit(close)
          }}>
            Username:<input id="username" className="formChild" value={this.state.username} type="text" onChange={this.handleChange}/>
            Password:<input id="password" className="formChild" value={this.state.password} type="password" onChange={this.handleChange}/>
            Confirm Password:<input id="confirmedPassword" className="formChild" value={this.state.confirmPassword} type="password" onChange={this.handleChange}/>
            <button type="submit">Register</button>
          </form>
          </div>
          <div className="actions">
          </div>
        </div>
      )}
    </Popup>
  )}
}

export default connect(null, {registerGhost})(RegisterLink)
