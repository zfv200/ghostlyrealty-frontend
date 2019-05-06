import React from 'react'
import styles from './Carousel.css.js'
import { Link } from 'react-router-dom'

const TestCarouselTile = (props) =>{
  if(props){
    return (
      <Link to={`/houses/${props.id}`} style={{ textDecoration: 'none' }}>
        {
          props['image_url'] !== "" ?
          <img className="w-100 h-100" src={props['image_url']} alt={props.name}/>
          :
          <img className="w-100 h-100" src={props.images[0]} alt={props.name}/>
        }
      </Link>
    )
  }
}

export default TestCarouselTile
