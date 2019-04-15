import React from 'react'
import styles from './HouseCard.css.js'
import HauntHouseButton from './HauntHouseButton'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'


interface HouseCardStatelessProps {
  name: string,
  image_url: string,
  id: number,
  currentUser: object
}

const HouseCard: React.SFC<HouseCardStatelessProps> = (props) => {
  return (
    <Link to={`/houses/${props.id}`}>
      <div>
        <h1>{props.name}</h1>
        <img style={styles.image} alt={`front shot of ${props.name}`} src={props.image_url}/>
        <br></br>
        {props.currentUser ? <HauntHouseButton id={props.id}/> : null}
      </div>
    </Link>
  )
}

const mapStateToProps = (state: any) => {
  return {
    currentUser: state.userReducer.currentUser
  }
}

export default connect(mapStateToProps)(HouseCard)
