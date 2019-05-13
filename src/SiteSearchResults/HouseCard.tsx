import React, { MouseEvent } from 'react'
import styles from './HouseCard.css.js'
import HauntHouseButton from './HauntHouseButton'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import ImageWithLoader from '../HOCs/ImageWithLoader'

import { Grid, Image, Divider, Button } from 'semantic-ui-react'

interface HouseCardStatelessProps {
  name: string,
  image_url: string,
  id: number,
  currentUser: currentUser,
  images: Array<string>,
  description: string,
  medium_id: number,
}

interface currentUser {
  id: number
}

const HouseCard: React.SFC<HouseCardStatelessProps> = (props) => {

  const imageStyle = {width: "400px", height: "300px"}

  return (
    <Link to={`/houses/${props.id}`} style={{ textDecoration: 'none' }}>
      <Grid style={{marginBottom: "60px"}}>
        <Grid.Column width={7}>
          <h1>{props.name}</h1>
          <ImageWithLoader style={imageStyle} images={props.images}/>
        </Grid.Column>
        <Grid.Column width={9} style={{marginTop: "45px"}}>
          <p>{props.description}</p>
          {
            props.currentUser && props.currentUser.id === props.medium_id ?
            <Link to={`/houses/${props.id}/edit`}>
              <Button basic color='black'>Edit Haunt</Button>
            </Link>
            :
            null
          }
        </Grid.Column>
      </Grid>
    </Link>
  )
}

// {props.currentUser ? <HauntHouseButton id={props.id}/> : null}

{/* <Image style={{width: "400px", height: "300px"}} alt={`front shot of ${props.name}`} src={props.images[0]}/> */}



// {
//   props.images && props.images.length ?
//   <img alt={`front shot of ${props.name}`} src={props.images[0]}/>
//   :
//   <img alt={`front shot of ${props.name}`} src={props.image_url}/>
// }

const mapStateToProps = (state: any) => {
  return {
    currentUser: state.userReducer.currentUser
  }
}

export default connect(mapStateToProps)(HouseCard)
