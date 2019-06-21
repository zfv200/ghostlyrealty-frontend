import React from 'react'
import styles from './Carousel.css.js'
import { Link } from 'react-router-dom'

const ModalCarouselTile = (props) =>{
  if(props){
    return (
      <div>
        <img className="ma5" style={{height: window.innerHeight - 140, width: "80%", margin: "auto", marginLeft: "130px", marginTop: "10px"}} src={props.image} alt={props.name}/>
      </div>
    )
  }
}


export default ModalCarouselTile
