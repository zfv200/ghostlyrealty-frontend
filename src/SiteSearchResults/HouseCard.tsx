import React from 'react'
import styles from './HouseCard.css.js'


interface HouseCardStatelessProps {
  name: string,
  image_url: string
}

const HouseCard: React.SFC<HouseCardStatelessProps> = (props) => {
  return (
    <div>
      <h1>{props.name}</h1>
      <img style={styles.image} alt={`front shot of ${props.name}`} src={props.image_url}/>
    </div>
  )
}

export default HouseCard
