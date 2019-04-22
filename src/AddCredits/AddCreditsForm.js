import React from 'react'
import { connect } from 'react-redux'
import linkButtonWithForm from '../HOCs/linkButtonWithForm'
import styles from '../UserHeader/UserHeader.css.js'
import { addCredits } from './AddCreditsActions'

class AddCreditsForm extends React.Component {
  state = {
    credits: 0
  }

  handleSubmit = (e) =>{
    e.preventDefault()
    this.props.handleClick(false)
    let newCredits = this.state.credits + this.props.currentUser.credits
    this.props.addCredits(newCredits, this.props.currentUser.id)
  }

  handleClick = (e) => {
    if(e.target.parentElement.id!=="credits-form" && e.target.parentElement.id!=="outer-popup" && e.target.parentElement.id!=="inner-outer-popup"){
      this.props.handleClick(false)
    }
  }

  handleChange = (e) => {
    this.setState({
      [e.target.id]: parseInt(e.target.value)
    })
  }

  render(){
    return (
      <div id="outer-popup" onClick={this.handleClick} style={styles.SignInForm}>
        <div id="inner-outer-popup" style={styles.content}>
          <form id="credits-form" style={styles.form} onSubmit={this.handleSubmit}>
            Add Credits!
            <input id="credits" className="ma2" value={this.state.credits} type="number" onChange={this.handleChange}/>
            <button id="sign-in-submit" className="ma2 f6 link dim ph3 pv2 mb2 dib white bg-black" type="submit">Add Credits</button>
          </form>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    currentUser: state.userReducer.currentUser
  }
}

export default connect(mapStateToProps, { addCredits })(linkButtonWithForm(AddCreditsForm))
