import React from 'react'
import { connect } from 'react-redux'
import AgentCard from '../AgentPage/AgentCard'

import { Header, Divider } from 'semantic-ui-react'

const FeaturedAgent = (props) => {
  return (
    <div>
      <Header as='h2'>Featured Medium:</Header>
      <AgentCard {...props.featuredAgent}/>
      <Divider />
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    featuredAgent: state.agentReducer.featuredAgent
  }
}

export default connect(mapStateToProps)(FeaturedAgent)
