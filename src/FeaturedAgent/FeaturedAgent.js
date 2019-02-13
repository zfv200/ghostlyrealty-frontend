import React from 'react'
import { connect } from 'react-redux'

const FeaturedAgent = (props) =>{
  return (
    <div className="homepagerow featuredAgent">
      <div className="featuredAgentChild">
        <h1>{props.agent.name}</h1>
        <img src={props.agent.image}/>
        <h3>"{props.agent.motto}"</h3>
      </div>
    </div>
  )
}

const mapStateToProps = (state) =>{
  return {
    agent: state.agentReducer.featuredAgent
  }
}

export default connect(mapStateToProps)(FeaturedAgent)
