import React from 'react'

const AgentResult = (props) => {
  return (
    <div>
      <h1>{props.username}</h1>
      <img src={props['image-url']}/>
    </div>
  )
}

export default AgentResult
