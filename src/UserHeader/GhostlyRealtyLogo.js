import React from 'react'
import { withRouter } from 'react-router-dom'
import styles from './UserHeader.css.js'

const GhostlyRealtyLogo = (props) => {
  return (
    <div
    className="pointer"
    onClick={()=>props.history.push("/")}
    style={styles.hLeft}>
      <img src="http://res.publicdomainfiles.com/pdf_view/1/13488739212200.png" style={{height: "47px", marginTop: "5px"}}/>
    </div>
  )
}

export default withRouter(GhostlyRealtyLogo)
