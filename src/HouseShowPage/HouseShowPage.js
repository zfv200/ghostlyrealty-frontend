import React, { useState, useEffect } from 'react'
import { compose } from 'redux'
import { fetchHouse } from './HouseShowPageActions'
import AgentCard from '../AgentPage/AgentCard.tsx'
import HauntHouseButton from '../SiteSearchResults/HauntHouseButton'

import withCurrentGhost from '../HOCs/withCurrentGhost'

import { Grid, Divider, Header } from 'semantic-ui-react'

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
    <Grid padded>
      <Grid.Row>
        <Grid.Column width={13}>
          {house['image_url'] !== "" ?
          <img style={{height: "400px", paddingRight: "20px"}} src={house['image_url']}/>
          :
          <img style={{height: "400px", paddingRight: "20px"}} src={house.images[0]}/>
          }
        </Grid.Column>
        <Grid.Column width={3}>
          <h1>{house.name}</h1>
          <h3>{house.address}</h3>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <h2>About this Haunt:</h2>
        <p>{house.description}</p>
      </Grid.Row>
      <Grid.Row style={{height: "80px"}}>
      {props.currentUser ? <HauntHouseButton id={parseInt(props.match.params.id)}/> : null}
      </Grid.Row>
      <Divider />
      <Grid.Row>
        <Header className="i" as="h3">Contact a Medium</Header>
        <AgentCard {...medium}/>
      </Grid.Row>
    </Grid>
  )
}



export default compose(
  withCurrentGhost
)(HouseShowPage)
