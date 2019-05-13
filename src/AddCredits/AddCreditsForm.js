import React, { useState } from 'react'
import { connect } from 'react-redux'
import linkButtonWithForm from '../HOCs/linkButtonWithForm'
import styles from '../UserHeader/UserHeader.css.js'
import { addCredits } from './AddCreditsActions'

import { Button, Segment, Form } from 'semantic-ui-react'

const AddCreditsForm = (props) => {

  const [credits, setCredits] = useState(0)

  const handleSubmit = (e) => {
    e.preventDefault()
    props.handleClick(false)
    let newCredits = credits + props.currentUser.credits
    props.addCredits(newCredits, props.currentUser.id)
  }

  const handleClick = (e) => {
    if(e.target.parentElement.id!=="credits-form" && e.target.parentElement.id!=="outer-popup" && e.target.parentElement.id!=="inner-outer-popup"){
      props.handleClick(false)
    }
  }

  const handleChange = (e) => {
    setCredits(credits + 1)
  }

  return (
    <div id="outer-popup" onClick={handleClick} style={styles.SignInForm}>
      <div id="inner-outer-popup" style={styles.addCreditsForm}>
        <Segment inverted style={{width: "100%"}}>
          <Form inverted id="credits-form" onSubmit={handleSubmit}>
            Add Credits!
            <input id="credits" className="ma2" value={credits} type="number" onChange={handleChange}/>
            <Button inverted id="sign-in-submit" type="submit" style={{marginTop: "10px"}}>Add Credits</Button>
          </Form>
        </Segment>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    currentUser: state.userReducer.currentUser
  }
}

export default connect(mapStateToProps, { addCredits })(linkButtonWithForm(AddCreditsForm))
