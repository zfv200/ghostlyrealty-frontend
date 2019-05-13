import React from 'react'
import { Link } from 'react-router-dom'

import { Image, Header } from 'semantic-ui-react'

interface AgentStatelessProps {
  username: string,
  image: string,
  motto: string,
  id: number,
  profile_picture: string
}

const AgentCard: React.SFC<AgentStatelessProps> = ({ username, image, motto, id, profile_picture }) => {
  return (
    <Link to={`/mediums/${id}`} style={{ textDecoration: 'none' }}>
      <div className="ui grid">
        <div className="four wide column">
          {profile_picture ?
            <Image alt={`${username}'s headshot'`} src={profile_picture}/>
          :
            <Image alt={`${username}'s headshot'`} src={image}/>
          }
        </div>
        <div className="four wide column">
          <Header as='h1' className="f3 mb5" >{username}</Header>
          <Header as='h3' className="i">{motto}</Header>
        </div>
        <div className="seven wide column">
          <p className="i">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </div>
      </div>
    </Link>
  )
}

export default AgentCard
