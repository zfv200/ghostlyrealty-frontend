import React from 'react'
import styles from './HouseCard.css.js'
import HauntHouseButton from './HauntHouseButton'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import { Grid, Image, Divider } from 'semantic-ui-react'

interface HouseCardStatelessProps {
  name: string,
  image_url: string,
  id: number,
  currentUser: object,
  images: Array<string>,
  description: string
}

const HouseCard: React.SFC<HouseCardStatelessProps> = (props) => {
  return (
    <Link to={`/houses/${props.id}`} style={{ textDecoration: 'none' }}>
      <Grid style={{marginBottom: "60px"}}>
        <Grid.Column width={7}>
          <h1>{props.name}</h1>
          <Image style={{width: "400px", height: "300px"}} alt={`front shot of ${props.name}`} src={props.images[0]}/>
        </Grid.Column>
        <Grid.Column width={9} style={{marginTop: "45px"}}>
          <p>{props.description}</p>
        </Grid.Column>
      </Grid>
    </Link>
  )
}

// {props.currentUser ? <HauntHouseButton id={props.id}/> : null}




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
