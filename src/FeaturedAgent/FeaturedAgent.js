import React from 'react'
import { connect } from 'react-redux'
import TestAgentCard from '../AgentPage/TestAgentCard'

import { Header, Divider } from 'semantic-ui-react'

const FeaturedAgent = (props) => {
  return (
    <div>
      <Header as='h2'>Featured Medium:</Header>
      <TestAgentCard {...props.featuredAgent}/>
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
