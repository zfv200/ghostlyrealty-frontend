import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import styles from './UserHeader.css.js'


import { recentSearch } from '../actions/actions'

const RecentSearch = (props) => {
  const handleRecentSearchClick = () => {
    props.recentSearch(props)
    props.history.push('/houses')
  }

  return (
    <div style={{background: 'black', width: "500px"}} onClick={handleRecentSearchClick}>
      <h3>{props.description}</h3><br></br>
    </div>
  )
}

export default connect(null, {recentSearch})(withRouter(RecentSearch))
