import React from 'react'

const AgentCard = (props) => {
  return (
    <div className="agent-card">
      <div>
      <h1>{props.username}</h1>
      <img alt={`${props.username}'s headshot'`} src={props.image}/>
      </div>
      <h3>{props.motto}</h3>
    </div>
  )
}

export default AgentCard
