import React from 'react'
import { connect } from 'react-redux'
import styles from './UserHeader.css.js'
// import { registerButtonClick } from './userHeaderActions.js'
import { registerGhost } from '../actions/actions'
import linkButtonWithForm from '../HOCs/linkButtonWithForm'
import withAuth from '../HOCs/withAuth'

class RegisterForm extends React.Component{
  state={
    username: '',
    password: '',
    confirmedPassword: '',
    medium: false,
    profile_picture: null
  }

  handleClick = (e) => {
    if(e.target.parentElement.id!=="register-form" && e.target.parentElement.id!=="outer-popup" && e.target.parentElement.id!=="inner-outer-popup"){
      this.props.handleClick(false)
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

  handleFile = (e) => {
    this.setState({
      profile_picture: e.target.files[0]
    })
  }

  validatePassword = () => {
    return this.state.password===this.state.confirmedPassword ? true : false
  }

  handleSubmit = (e) => {
    // TODO: create a passwords don't match error
    e.preventDefault()
    if (this.validatePassword()){
      const formData = new FormData()
      // formData.append('ghost[name]', "hi!")
      formData.append('ghost[username]', this.state.username)
      formData.append('ghost[password]', this.state.password)
      formData.append('ghost[profile_picture]', this.state.profile_picture)
      formData.append('ghost[medium]', this.state.medium)
      this.props.registerGhost(formData)
      // this.props.registerGhost(this.state.username, this.state.password, this.state.medium, this.state.image)
    }
  }

  // componentWillUnmount(){
  //   this.props.registerButtonClick(false)
  // }

  render(){
    return (
      <div id="outer-popup" onClick={this.handleClick} style={styles.SignInForm}>
        <div id="inner-outer-popup" style={styles.content}>
          <form id="register-form" style={styles.form} onSubmit={this.handleSubmit}>
            Username:
            <input id="username" className="ma2" value={this.state.username} type="text" onChange={this.handleChange}/>
            Medium?:
            <input id="medium" className="ma2" checked={this.state.medium} className="formChild" type="checkbox" onChange={this.handleCheck}/>
            Profile Picture:
            <input id="profile_picture" type="file" onChange={this.handleFile}/>
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


// <input id="image" className="ma2" value={this.state.image} className="formChild" type="text" onChange={this.handleChange}/>

export default connect(null, {registerGhost})(withAuth(linkButtonWithForm(RegisterForm), false))
