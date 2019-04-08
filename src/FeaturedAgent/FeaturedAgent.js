import React from 'react'
import { connect } from 'react-redux'
import AgentCard from '../AgentPage/AgentCard'

const FeaturedAgent = (props) => {
  return (
    <div>
      <h1 style={{fontSize: "25px", marginLeft: "33px"}}>Featured Medium:</h1>
      <AgentCard {...props.featuredAgent}/>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    featuredAgent: state.agentReducer.featuredAgent
  }
}

export default connect(mapStateToProps)(FeaturedAgent)
