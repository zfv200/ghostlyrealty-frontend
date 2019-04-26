import React, { useState, useEffect } from 'react'
import withCurrentGhost from '../HOCs/withCurrentGhost'
import { fetchMedium } from './MediumShowPageActions'
import HouseCard from '../SiteSearchResults/HouseCard.tsx'

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
      <h3>{medium.username}</h3>
      <img src={medium.image} />
      <h3>Current Available Haunts:</h3>
      {renderProperties()}
    </div>
  )
}

export default withCurrentGhost(MediumShowPage)
