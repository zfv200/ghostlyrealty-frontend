import React from 'react'


interface AgentStatelessProps {
  username: string,
  image: string,
  motto: string
}

const AgentCard: React.SFC<AgentStatelessProps> = ({ username, image, motto }) => {
  return (
    <div className="agent-card ph5 flex bb mb3 pb3" style={{width: "100%"}}>
      <img className="fl p2" alt={`${username}'s headshot'`} src={image}/>
      <div className="fr w-100 ml5">
        <h1 className="f3 mb5" >{username}</h1>
        <h3 className="i">{motto}</h3>
      </div>
    </div>
  )
}

export default AgentCard
