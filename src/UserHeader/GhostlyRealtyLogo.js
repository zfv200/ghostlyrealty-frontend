import React from 'react'
import { withRouter } from 'react-router-dom'

const GhostlyRealtyLogo = (props) => {
  return (
    <div
    onClick={()=>props.history.push("/")}
    className="nav headerItem headerStart hLeft">
      <h3>Logo</h3>
    </div>
  )
}

export default withRouter(GhostlyRealtyLogo)
