import React from 'react'
import styles from './Carousel.css.js'

const CarouselTile = (props) =>{
  if(props){
    return (
      <div style={styles.carouselChild}>
        <img style={styles.image} src={props['image-url']} alt={props.name}/>
        <h1 >{props.name}</h1>
      </div>
    )
  }
}

export default CarouselTile
