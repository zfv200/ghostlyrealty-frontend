import React from 'react'

const CarouselTile = (props) =>{
  if(props){
    return (
      <div className="carouselChild">
        <img className="image carChild" src={props['image-url']} alt={props.name}/>
        <h1 className="carChild" >{props.name}</h1>
      </div>
    )
  }
}

export default CarouselTile
