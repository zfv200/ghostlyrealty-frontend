import React from 'react'
import Popup from 'reactjs-popup'
import { loginGhost } from '../actions/actions'
import { connect } from 'react-redux'
import '../SignInLink.css'

// TODO: combine with register link

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

  handleSubmit = (close) => {
    this.setState({
      password: ''
    })
    this.props.loginGhost(this.state.username, this.state.password, close)
  }

  render(){
    return (
      <Popup trigger={<button className="button"> Sign In </button>} modal>
      {close => (
        <div className="modal">
          <button className="close" onClick={close}>
          &times;
          </button>
          {this.props.signInError ? <div>"Wrong info!!!"</div> : null}
          <div className="header"> Sign In! </div>
          <div className="content">
          <form className="signUpForm" onSubmit={(e)=>{
            e.preventDefault()
            this.handleSubmit(close)
          }}>
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

const mapStateToProps = (state) => {
  return {
    signInError: state.userReducer.signInError
  }
}


export default connect(mapStateToProps, {loginGhost})(SignInLink)
