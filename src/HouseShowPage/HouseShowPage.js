import React, { useState, useEffect } from 'react'
import { compose } from 'redux'
import { fetchHouse } from './HouseShowPageActions'
import AgentCard from '../AgentPage/AgentCard.tsx'
import HauntHouseButton from '../SiteSearchResults/HauntHouseButton'
import ImageWithLoader from '../HOCs/ImageWithLoader'
import Carousel from '../Carousel/Carousel'

import withCurrentGhost from '../HOCs/withCurrentGhost'

import { Grid, Divider, Header } from 'semantic-ui-react'

const HouseShowPage = (props) => {

  const [house, addHouse] = useState({})
  const [images, addImages] = useState([])
  const [medium, addMedium] = useState({})
  const [convertedAtts, addConvertedAtts] = useState({})

  useEffect(()=>{
    window.scrollTo(0, 0)
    let id = parseInt(props.match.params.id)
    fetchHouse(id)
    .then(json=>{
      addHouse({...json.house})
      addImages([...json.house.images])
      addMedium({...json.medium})
      addConvertedAtts(attributes(json.house))
    })
  }, [])

  const attributes = (house) => {

    const keyConverter = (oldKey, newKey, object) => {
      if (oldKey !== newKey) {
        Object.defineProperty(object, newKey, Object.getOwnPropertyDescriptor(object, oldKey));
        delete object[oldKey];
      }
    }

    const valueConverter = (value) => {
      return value ? "Yes" : "No"
    }

    const {address, description, featured, id, image_url, images, name, rooms, ...converted_atts} = house

    for (let key in converted_atts){
      converted_atts[key] = valueConverter(converted_atts[key])
      let newKey = key.split('_').map(word=>word.charAt(0).toUpperCase() + word.slice(1)).join(" ")
      keyConverter(key, newKey, converted_atts)
    }

    return converted_atts
  }

  const displayAttributes = () => {
    if(convertedAtts){
      return Object.keys(convertedAtts).map(key=>{
        return (
          <div>
            <h3>{key}</h3>:<p>{convertedAtts[key]}</p>
          </div>
        )
      })
    } else {
      return null
    }
  }

  return (
    <div>
      <Header as='h1' style={{marginLeft: "18px"}}>{house.name}</Header>
      <Grid padded>
        <Grid.Row>
          <Grid.Column width={13}>
            <Carousel
            images={images}
            style={{height: "400px", width: "800px", border: "solid", margin: "auto"}}
            id={house.id}
            />
          </Grid.Column>
          <Grid.Column width={3}>
            <h1>{house.name}</h1>
            <h3>{house.address}</h3>
            {displayAttributes()}
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
    </div>
  )
}

// <img style={{height: "400px", paddingRight: "20px"}} src={house.images ? house.images[0] : ""}/>




export default compose(
  withCurrentGhost
)(HouseShowPage)
