import React from 'react'
import { connect } from 'react-redux'
import styles from './UserHeader.css.js'
// import { registerButtonClick } from './userHeaderActions.js'
import { registerGhost } from '../actions/actions'
import linkButtonWithForm from '../HOCs/linkButtonWithForm'
import withAuth from '../HOCs/withAuth'

import { Form, Button, Segment, Checkbox } from 'semantic-ui-react'

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

  fileInputRef = React.createRef();

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
        <div id="inner-outer-popup" style={styles.registerContent}>
          <Segment inverted style={{width: '100%'}}>
            <Form inverted id="register-form" onSubmit={this.handleSubmit}>
              <Form.Field>
                <label>Username:</label>
                <input id="username" className="ma2" onClick={e => e.stopPropagation()} value={this.state.username} type="text" onChange={this.handleChange}/>
              </Form.Field>
              <Form.Field>
                Password:
                <input id="password" onClick={e => e.stopPropagation()} className="ma2" value={this.state.password} type="password" onChange={this.handleChange}/>
              </Form.Field>
              <Form.Field>
                Confirm Password:
                <input id="confirmedPassword" onClick={e => e.stopPropagation()} className="ma2" value={this.state.confirmedPassword} type="password" onChange={this.handleChange}/>
              </Form.Field>
              <Form.Field>
              <label>Medium?:</label>
              <Form.Checkbox id="medium" onClick={e => e.stopPropagation()} checked={this.state.medium} onChange={this.handleCheck}/>
              </Form.Field>
              <Form.Field>
              Profile Picture:
              <br></br>
              <br></br>
              <Button
              inverted
              content="Choose File"
              labelPosition="left"
              icon="file"
              onClick={(e) => {
                e.stopPropagation()
                this.fileInputRef.current.click()}
              }
              />
              <input id="profile_picture" hidden onClick={e => e.stopPropagation()} ref={this.fileInputRef} type="file" onChange={this.handleFile}/>
              </Form.Field>
              <Form.Field>
                <Checkbox label='I agree to haunt responsibly and spook my best' onClick={e => e.stopPropagation()} />
              </Form.Field>
              <Button inverted type="submit">Sign In</Button>
            </Form>
          </Segment>
        </div>
      </div>
    )
  }

}


// <input id="image" className="ma2" value={this.state.image} className="formChild" type="text" onChange={this.handleChange}/>

export default connect(null, {registerGhost})(withAuth(linkButtonWithForm(RegisterForm), false))
