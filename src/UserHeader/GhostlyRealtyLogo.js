import React from 'react'
import { withRouter } from 'react-router-dom'
import styles from './UserHeader.css.js'

const GhostlyRealtyLogo = (props) => {
  return (
    <div
    onClick={()=>props.history.push("/")}
    style={styles.hLeft}>
      <h3>Logo</h3>
    </div>
  )
}

export default withRouter(GhostlyRealtyLogo)
