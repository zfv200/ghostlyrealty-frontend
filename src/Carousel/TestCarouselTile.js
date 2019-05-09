import React from 'react'
import styles from './Carousel.css.js'
import { Link } from 'react-router-dom'
import { Image } from 'semantic-ui-react'

const TestCarouselTile = (props) =>{
  if(props){
    return (
      <Link to={`/houses/${props.id}`} style={{ textDecoration: 'none' }}>
        {
          props['image_url'] !== "" ?
          <Image style={{height: '370px', width: "1000px"}} className="" src={props['image_url']} alt={props.name}/>
          :
          <Image style={{height: '370px', width: "1000px"}} className="" src={props.images[0]} alt={props.name}/>
        }
      </Link>
    )
  }
}

export default TestCarouselTile
