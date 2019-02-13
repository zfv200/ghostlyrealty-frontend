import React from 'react'
import { connect } from 'react-redux'

import Header from './Header'
import AgentCard from './AgentCard'

class AgentsPage extends React.Component{

  renderAgents = () => {
    return this.props.agents.map(agent=><AgentCard {...agent}/>)
  }

  render(){
    return (
      <div>
        <Header title="Find Your Haunt Expert"/>
        {this.renderAgents()}
      </div>
    )
  }
}

const mapStateToProps = (state)=>{
  return {
    agents: state.agentReducer.agents
  }
}

export default connect(mapStateToProps)(AgentsPage)
