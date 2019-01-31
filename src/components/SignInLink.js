import React from 'react'
import Popup from 'reactjs-popup'
import '../SignInLink.css'

class SignInLink extends React.Component {
  state={
    username: '',
    password: '',
  }

  handleChange = (e) =>{
    this.setState({
      [e.target.id]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    // const body = this.state
    fetch('http://localhost:3000/api/v1/login', {
      method: 'post',
      headers: {
        'Content-Type':'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify({ghost: this.state})
    }).then(r=>r.json())
    .then(console.log)
  }

  render(){
    return (
      <Popup trigger={<button className="button"> Sign In </button>} modal>
      {close => (
        <div className="modal">
          <a className="close" onClick={close}>
          &times;
          </a>
          <div className="header"> Sign In! </div>
          <div className="content">
          <form className="signUpForm" onSubmit={this.handleSubmit}>
            Username:<input id="username" className="formChild" value={this.state.username} type="text" onChange={this.handleChange}/>
            Password:<input id="password" className="formChild" value={this.state.password} type="password" onChange={this.handleChange}/>
            <button type="submit">Sign In</button>
          </form>
          </div>
          <div className="actions">
          </div>
        </div>
      )}
      </Popup>
    )}
  }


export default SignInLink
