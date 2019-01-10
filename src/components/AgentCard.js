import React from 'react'

const AgentCard = (props) => {

  return (
    <div>
      <h1>{props.name}</h1>
      <img src={props.image}/>
      <h3>{props.title}</h3>
    </div>
  )
}

export default AgentCard
