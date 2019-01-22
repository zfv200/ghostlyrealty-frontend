import React from 'react'

const AgentCard = (props) => {

  return (
    <div className="agent-card">
      <div class>
        <h1>{props.name}</h1>
        <img src={props.image}/>
      </div>
      <h3>{props.title}</h3>
    </div>
  )
}

export default AgentCard
