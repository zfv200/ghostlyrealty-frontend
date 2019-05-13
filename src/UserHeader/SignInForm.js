import React from 'react'
import styles from './UserHeader.css.js'
import { loginGhost } from '../actions/actions'
import { connect } from 'react-redux'
import { signInButtonClick } from './userHeaderActions'
import linkButtonWithForm from '../HOCs/linkButtonWithForm'
import withAuth from '../HOCs/withAuth'

import { Form, Button, Segment } from 'semantic-ui-react'

class SignInForm extends React.Component{
  state={
    username: '',
    password: ''
  }

  handleClick = (e) => {
    if(e.target.parentElement.id!=="sign-in-form" && e.target.parentElement.id!=="outer-popup" && e.target.parentElement.id!=="inner-outer-popup"){
      this.props.handleClick(false)
    }
  }

  handleChange = (e) =>{
    this.setState({
      [e.target.id]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.handleClick(false)
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
          <Segment inverted style={{width: "100%"}}>
            <Form inverted id="sign-in-form" onSubmit={this.handleSubmit}>
              <Form.Field>
                <label>Username:</label>
                <input id="username" onClick={e => e.stopPropagation()} value={this.state.username} type="text" onChange={this.handleChange}/>
              </Form.Field>
              <Form.Field>
                <label>Password:</label>
                <input id="password" onClick={e => e.stopPropagation()} value={this.state.password} type="password" onChange={this.handleChange}/>
              </Form.Field>
              <Button inverted id="sign-in-submit" type="submit">Sign In</Button>
            </Form>
          </Segment>
        </div>
      </div>
    )
  }
}

export default connect(null, { signInButtonClick, loginGhost })(withAuth(linkButtonWithForm(SignInForm), false))
