import React from 'react'
import { connect } from 'react-redux'

import Header from './Header'
import AgentCard from './AgentCard'
import AgentFilter from './AgentFilter'

import withCurrentGhost from '../HOCs/withCurrentGhost'

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
        <div className="ma5 relative" style={{width: "940px"}}>
          <AgentFilter />
          <div className="fr pa2 w-50">
            {this.renderAgents()}
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state: any)=>{
  return {
    agents: state.agentReducer.agents,
  }
}

export default connect<StateProps, DispatchProps>(mapStateToProps, {fetchAgents})(withCurrentGhost(AgentsPage) as any)
