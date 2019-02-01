import React from 'react'
import Popup from 'reactjs-popup'
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

  handleSubmit = (e) => {
    // TODO: create a passwords don't match error
    e.preventDefault()
    console.log(this)
    if (this.validatePassword()){
      fetch('http://localhost:3000/api/v1/register', {
        method: 'post',
        headers: {
          'Content-Type':'application/json',
          Accept: 'application/json'
        },
        body: JSON.stringify({ghost: this.state})
      }).then(r=>r.json())
      .then(console.log)
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
          <form className="signUpForm" onSubmit={this.handleSubmit}>
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

export default RegisterLink
