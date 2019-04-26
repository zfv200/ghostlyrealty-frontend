import React from 'react'
import { connect } from 'react-redux'
import withCurrentGhost from '../HOCs/withCurrentGhost'
import agentWithAuth from '../HOCs/agentWithAuth'
import AddCreditsForm from '../AddCredits/AddCreditsForm'

import { featureMedium } from './AgentDashboardActions'

const AgentDashboard = (props) => {

  const handleFeatureClick = () => {
    if(props.currentUser.credits >= 10){
      props.featureMedium(props.currentUser.id)
    } else {
      alert("Please add more credits!")
    }
  }

  return (
    <div>
      <h3>Welcome, {props.currentUser.username}!</h3>
      <img src={props.currentUser.image}/>
      <h4>Spook Credits: {props.currentUser.credits}</h4>
      {!props.currentUser.featured &&
        <button onClick={handleFeatureClick} className="f6 link dim ba ph3 pv2 mb2 dib black">Become the featured Medium! (10 credits)</button>
      }
      <AddCreditsForm title='Add Credits'/>
    </div>
  )
}

export default connect(null, {featureMedium})(withCurrentGhost(agentWithAuth(AgentDashboard)))
