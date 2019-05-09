import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import styles from './UserHeader.css.js'

import { Header } from 'semantic-ui-react'

import { recentSearch } from '../actions/actions'

import { toggleMenu } from '../containers/AppActions'

const RecentSearch = (props) => {
  
  const handleRecentSearchClick = (e) => {
    props.toggleMenu(e, props.menuVisible)
    props.recentSearch(props)
    window.scrollTo(0, 0)
    props.history.push('/houses')
  }

  return (
    <div style={{background: 'black', width: "500px", cursor: "pointer"}} onClick={handleRecentSearchClick}>
      <Header inverted as='h3'>{props.description}</Header><br></br>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    menuVisible: state.userReducer.menuVisible
  }
}

export default connect(mapStateToProps, {recentSearch, toggleMenu})(withRouter(RecentSearch))
