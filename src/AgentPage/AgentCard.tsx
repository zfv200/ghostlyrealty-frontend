import React from 'react'


interface AgentStatelessProps {
  username: string,
  image: string,
  motto: string
}

const AgentCard: React.SFC<AgentStatelessProps> = ({ username, image, motto }) => {
  return (
    <div className="agent-card">
      <h1>{username}</h1>
      <img alt={`${username}'s headshot'`} src={image}/>
      <h3>{motto}</h3>
    </div>
  )
}

export default AgentCard
