import React, { useState, useEffect } from 'react'
import { compose } from 'redux'
import { fetchHouse } from './HouseShowPageActions'
import AgentCard from '../AgentPage/AgentCard.tsx'
import HauntHouseButton from '../SiteSearchResults/HauntHouseButton'

import withCurrentGhost from '../HOCs/withCurrentGhost'

const HouseShowPage = (props) => {

  const [house, addHouse] = useState({})
  const [medium, addMedium] = useState({})

  useEffect(()=>{
    window.scrollTo(0, 0)
    let id = parseInt(props.match.params.id)
    fetchHouse(id)
    .then(json=>{
      addHouse({...json.house})
      addMedium({...json.medium})
    })
  }, [])

  return (
    <div>
      <h1>{house.name}</h1>
      <div style={{display: "flex"}}>
        {house['image_url'] !== "" ?
        <img style={{height: "400px", paddingRight: "20px"}} src={house['image_url']}/>
        :
        <img style={{height: "400px", paddingRight: "20px"}} src={house.images[0]}/>

      }
        <AgentCard {...medium}/>
      </div>
      <h3>{house.address}</h3>
      {props.currentUser ? <HauntHouseButton id={parseInt(props.match.params.id)}/> : null}
      <h2>About this Haunt:</h2>
      <p>{house.description}</p>
    </div>
  )
}

export default compose(
  withCurrentGhost
)(HouseShowPage)
