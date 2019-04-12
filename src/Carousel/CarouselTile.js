import React from 'react'
import styles from './Carousel.css.js'

const CarouselTile = (props) =>{
  if(props){
    return (
      <li className="di fl pa0 w-100" style={styles.carouselChild}>
        <img className="w-100" style={styles.img} src={props['image_url']} alt={props.name}/>
        <div className="caption relative bottom-2 bg-black white h2">
          <p className="relative pa1 ml5">{props.name}</p>
        </div>
      </li>
    )
  }
}

export default CarouselTile
