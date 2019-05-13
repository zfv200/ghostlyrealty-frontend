import React from 'react'
import styles from './GhostSpinner.css.js'

const GhostSpinner = (props) => {
  return (
    <React.Fragment>
      <img style={props.style} src="https://media.giphy.com/media/wnZbjts10BSVy/giphy.gif"/>
    </React.Fragment>
  )
}

export default GhostSpinner
