import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'


import { recentSearch } from '../actions/actions'

const RecentSearch = (props) => {
  const handleRecentSearchClick = () => {
    props.recentSearch(props)
    props.history.push('/houses')
  }

  return (
    <div onClick={handleRecentSearchClick} className="recentSearch">
      <h3 className="recentSearchText">{props.description}</h3><br></br>
    </div>
  )
}

export default connect(null, {recentSearch})(withRouter(RecentSearch))
