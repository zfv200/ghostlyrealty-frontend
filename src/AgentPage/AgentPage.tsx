import React from 'react'
import { connect } from 'react-redux'

import Header from './Header'
import AgentCard from './AgentCard'

import { fetchAgents } from './AgentPageActions'

interface AgentType {

}

class AgentsPage extends React.Component{

  componentDidMount(){
    this.props.fetchAgents()
  }

  renderAgents = () => {
    return this.props.agents.map(agent=><AgentCard key={agent.id} {...agent.attributes}/>)
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
    agents: state.agentReducer.agents,
  }
}

export default connect(mapStateToProps, {fetchAgents})(AgentsPage)
