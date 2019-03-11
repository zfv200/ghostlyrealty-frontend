import React from 'react'

interface HouseResultStatelessProps {
  name: string,
  image: string
}

const HouseResult: React.SFC<HouseResultStatelessProps> = (props) => {
  return (
    <div>
      <h1>{props.name}</h1>
      <img alt={`front shot of ${props.name}`} src={props.image_url}/>
    </div>
  )
}

export default HouseResult
