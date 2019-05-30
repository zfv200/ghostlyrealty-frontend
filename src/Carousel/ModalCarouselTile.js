import React from 'react'
import styles from './Carousel.css.js'
import { Link } from 'react-router-dom'

const ModalCarouselTile = (props) =>{
  if(props){
    return (
      <div>
        <li style={{display: "flex"}}>
          <img style={{height: window.innerHeight - 140, width: "95%"}} src={props.image} alt={props.name}/>
        </li>
      </div>
    )
  }
}


export default ModalCarouselTile
