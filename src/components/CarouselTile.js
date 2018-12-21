import React from 'react'

const CarouselTile = (props) =>{
  if(props){
    return (
      <div>
        <img src={props['image-url']} alt={props.name}/>
      </div>
    )
  }
}

export default CarouselTile
