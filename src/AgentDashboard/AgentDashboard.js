import React from 'react'
import { connect } from 'react-redux'
import withCurrentGhost from '../HOCs/withCurrentGhost'
import agentWithAuth from '../HOCs/agentWithAuth'
import AddCreditsForm from '../AddCredits/AddCreditsForm'

import { featureMedium } from './AgentDashboardActions'

class AgentDashboard extends React.Component {

  handleFeatureClick = () => {
    if(this.props.currentUser.credits >= 10){
      this.props.featureMedium(this.props.currentUser.id)
    } else {
      alert("Please add more credits!")
    }
  }

  render(){
    return (
      <div>
        <h3>Welcome, {this.props.currentUser.username}!</h3>
        <img src={this.props.currentUser.image}/>
        <h4>Spook Credits: {this.props.currentUser.credits}</h4>
        {!this.props.currentUser.featured &&
          <button onClick={this.handleFeatureClick} className="f6 link dim ba ph3 pv2 mb2 dib black">Become the featured Medium! (10 credits)</button>
        }
        <AddCreditsForm title='Add Credits'/>
      </div>
    )
  }
}

export default connect(null, {featureMedium})(withCurrentGhost(agentWithAuth(AgentDashboard)))
