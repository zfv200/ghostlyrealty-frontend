import React from 'react'

const CarouselTile = (props) =>{
  if(props){
    return (
      <div className="carouselChild">
        <img src={props['image-url']} alt={props.name}/>
        <h1>{props.name}</h1>
      </div>
    )
  }
}

export default CarouselTile
