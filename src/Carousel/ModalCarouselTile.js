import React from 'react'
import styles from './Carousel.css.js'
import { Link } from 'react-router-dom'

const ModalCarouselTile = (props) =>{
  if(props){
    return (
      <div>
        <li>
          <img src={props.image} alt={props.name}/>
        </li>
      </div>
    )
  }
}

// <div className="caption relative bottom-2 bg-black white h2">
//   <p className="relative pa1 ml5">{props.name}</p>
// </div>

export default ModalCarouselTile
