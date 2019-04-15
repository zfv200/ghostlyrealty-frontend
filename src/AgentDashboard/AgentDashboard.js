import React from 'react'
import { connect } from 'react-redux'
import withCurrentGhost from '../HOCs/withCurrentGhost'
import agentWithAuth from '../HOCs/agentWithAuth'

class AgentDashboard extends React.Component {

  render(){
    console.log(this.props);
    return (
      <div>
        <h3>Welcome, {this.props.currentUser.username}!</h3>
        <h4>Spook Credits: {this.props.currentUser.credits}</h4>
      </div>
    )
  }
}

export default connect(null)(withCurrentGhost(agentWithAuth(AgentDashboard)))
