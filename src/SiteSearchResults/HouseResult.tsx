import React from 'react'
import styles from './HouseResult.css.js'


interface HouseResultStatelessProps {
  name: string,
  image_url: string
}

const HouseResult: React.SFC<HouseResultStatelessProps> = (props) => {
  return (
    <div>
      <h1>{props.name}</h1>
      <img style={styles.image} alt={`front shot of ${props.name}`} src={props.image_url}/>
    </div>
  )
}

export default HouseResult
