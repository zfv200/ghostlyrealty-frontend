import React from 'react'
import styles from './Carousel.css.js'
import { Link } from 'react-router-dom'

const CarouselTile = (props) =>{
  if(props){
    return (
      <Link to={`/houses/${props.id}`} style={{ textDecoration: 'none' }}>
        <li className="di fl pa0 w-100" style={styles.carouselChild}>
          <img className="w-100" style={styles.img} src={props['image_url']} alt={props.name}/>
          <div className="caption relative bottom-2 bg-black white h2">
            <p className="relative pa1 ml5">{props.name}</p>
          </div>
        </li>
      </Link>
    )
  }
}

export default CarouselTile
