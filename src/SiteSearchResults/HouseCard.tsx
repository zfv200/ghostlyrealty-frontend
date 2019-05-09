import React from 'react'
import styles from './HouseCard.css.js'
import HauntHouseButton from './HauntHouseButton'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'


interface HouseCardStatelessProps {
  name: string,
  image_url: string,
  id: number,
  currentUser: object,
  images: Array<string>
}

const HouseCard: React.SFC<HouseCardStatelessProps> = (props) => {
  return (
    <div className="ui grid">
      <Link to={`/houses/${props.id}`} style={{ textDecoration: 'none' }}>
        <div className="four wide column">
          <h1>{props.name}</h1>
        </div>
          <div className="four wide column">
        {
          props.images && props.images.length ?
          <img alt={`front shot of ${props.name}`} src={props.images[0]}/>
          :
          <img alt={`front shot of ${props.name}`} src={props.image_url}/>
        }
          </div>
        </Link>
      <div className="seven wide column">
        {props.currentUser ? <HauntHouseButton id={props.id}/> : null}
      </div>
    </div>
  )
}

const mapStateToProps = (state: any) => {
  return {
    currentUser: state.userReducer.currentUser
  }
}

export default connect(mapStateToProps)(HouseCard)
