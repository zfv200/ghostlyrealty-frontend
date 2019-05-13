import React from 'react'
import { connect } from 'react-redux'

import Header from './Header'
import AgentCard from './AgentCard'
import AgentFilter from './AgentFilter'

import withCurrentGhost from '../HOCs/withCurrentGhost'

import { fetchAgents } from './AgentPageActions'

import { Divider } from 'semantic-ui-react'

interface AgentAttributes {
  id: number,
  username: string,
  image: string,
  motto: string,
  profile_picture: string
}

// type AgentType = {
//   id: number,
//   attributes: AgentAttributes
// }

interface StateProps {
  agents: any
}

interface DispatchProps {
  fetchAgents: Function
}

type Props = DispatchProps

class AgentsPage extends React.Component<StateProps & DispatchProps, any>{

  componentDidMount(){
    window.scrollTo(0, 0)
    this.props.fetchAgents()
  }

  renderAgents = () => {
    return this.props.agents.map((agent: AgentAttributes) => {
      return (
        <div>
          <AgentCard key={agent.id} {...agent}/>
          <Divider />
        </div>
      )
    })
  }

  render(){
    return (
      <div>
        <Header title="Find Your Haunt Expert"/>
        <div className="ma5 relative" style={{width: "940px"}}>
          <AgentFilter />
          <div className="fr pa2 w-60">
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
