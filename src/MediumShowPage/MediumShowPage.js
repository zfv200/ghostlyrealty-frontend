import React, { useState, useEffect } from 'react'
import withCurrentGhost from '../HOCs/withCurrentGhost'
import { fetchMedium } from './MediumShowPageActions'
import HouseCard from '../SiteSearchResults/HouseCard.tsx'
import AgentCard from '../AgentPage/AgentCard'

import { Divider } from 'semantic-ui-react'

const MediumShowPage = (props) => {

  const [medium, addMedium] = useState({})
  const [properties, addProperties] = useState([])

  useEffect(()=>{
    window.scrollTo(0, 0)
    let id = parseInt(props.match.params.id)
    fetchMedium(id)
    .then(json=>{
      addMedium(json.medium)
      addProperties(json.properties)
    })
  }, [])

  const renderProperties = () =>{
    return properties.map(property=>{
      return <HouseCard key={property.id} {...property}/>
    })
  }

  return (
    <div>
      <AgentCard {...medium}/>
      <Divider />
      <h3>Current Available Haunts:</h3>
      {renderProperties()}
    </div>
  )
}

// <h3>{medium.username}</h3>
// {medium.profile_picture ?
//   <img src={medium.profile_picture} />
//   :
//   <img src={medium.image} />
// }
export default withCurrentGhost(MediumShowPage)
