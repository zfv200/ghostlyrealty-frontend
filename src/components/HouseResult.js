import React from 'react'

const HouseResult = (props) => {
  return (
    <div>
      <h1>{props.name}</h1>
      <img src={props.image_url}/>
    </div>
  )
}

export default HouseResult
