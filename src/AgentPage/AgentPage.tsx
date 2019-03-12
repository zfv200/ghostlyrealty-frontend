import React from 'react'
import { connect } from 'react-redux'

import Header from './Header'
import AgentCard from './AgentCard'

import { fetchAgents } from './AgentPageActions'

interface AgentAttributes {
  username: string,
  image: string,
  motto: string
}

type AgentType = {
  id: number,
  attributes: AgentAttributes
}

interface StateProps {
  agents: any
}

interface DispatchProps {
  fetchAgents: Function
}

type Props = DispatchProps

class AgentsPage extends React.Component<StateProps & DispatchProps, any>{

  componentDidMount(){
    this.props.fetchAgents()
  }

  renderAgents = () => {
    return this.props.agents.map((agent: AgentType) => <AgentCard key={agent.id} {...agent.attributes}/>)
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

const mapStateToProps = (state: any)=>{
  return {
    agents: state.agentReducer.agents,
  }
}

export default connect<StateProps, DispatchProps>(mapStateToProps, {fetchAgents})(AgentsPage as any)
