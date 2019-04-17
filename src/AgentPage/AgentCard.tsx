import React from 'react'
import { Link } from 'react-router-dom'

interface AgentStatelessProps {
  username: string,
  image: string,
  motto: string,
  id: number
}

const AgentCard: React.SFC<AgentStatelessProps> = ({ username, image, motto, id }) => {
  return (
    <Link to={`/mediums/${id}`} style={{ textDecoration: 'none' }}>
    <div className="agent-card ph5 flex bb mb3 pb3" style={{width: "700px"}}>
      <img className="fl p2 h5 w5" alt={`${username}'s headshot'`} src={image}/>
      <div className="fr w-100 ml5">
        <h1 className="f3 mb5" >{username}</h1>
        <h3 className="i">{motto}</h3>
      </div>
    </div>
    </Link>
  )
}

export default AgentCard
