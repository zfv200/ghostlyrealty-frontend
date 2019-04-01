import React from 'react'
import styles from './UserHeader.css.js'
import { connect } from 'react-redux'
import { signInButtonClick } from './userHeaderActions'

class SignInForm extends React.Component{
  state={

  }

  //pick up here, incorporate functionality from signInLink original popup/state

  handleClick = (e) => {
    if(e.target.parentElement.id!=="sign-in-form" && e.target.parentElement.id!=="outer-popup"){
      this.props.signInButtonClick(false)
    }
  }

  render(){
    return (
      <div id="outer-popup" onClick={this.handleClick} style={styles.SignInForm}>
        <div style={styles.content}>
          <form id="sign-in-form" style={styles.form} onSubmit={(e)=>e.preventDefault()}>
            Username:
            <input id="username" className="ma2" value={this.state.username} type="text" onChange={this.handleChange}/>
            Password:
            <input id="password" className="ma2" value={this.state.password} type="password" onChange={this.handleChange}/>
            <button className="ma2 f6 link dim ph3 pv2 mb2 dib white bg-black" type="submit">Sign In</button>
          </form>
        </div>
      </div>
    )
  }
}

export default connect(null, { signInButtonClick })(SignInForm)
