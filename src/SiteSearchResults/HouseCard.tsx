import React from 'react'
import styles from './HouseCard.css.js'
import HauntHouseButton from './HauntHouseButton'


interface HouseCardStatelessProps {
  name: string,
  image_url: string,
  id: number
}

const HouseCard: React.SFC<HouseCardStatelessProps> = (props) => {
  return (
    <div>
      <h1>{props.name}</h1>
      <img style={styles.image} alt={`front shot of ${props.name}`} src={props.image_url}/>
      <br></br>
      <HauntHouseButton id={props.id}/>
    </div>
  )
}

export default HouseCard
