import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import styles from './UserHeader.css.js'

import { Header, Segment } from 'semantic-ui-react'

import { recentSearch } from '../actions/actions'

import { toggleMenu } from '../containers/AppActions'

const RecentSearch = (props) => {

  const handleRecentSearchClick = (e) => {
    if(props.menuVisible){
      props.toggleMenu(e, props.menuVisible)
    }
    props.recentSearch(props)
    window.scrollTo(0, 0)
    props.history.push('/houses')
  }

  return (
    <Segment className="link dim black b" style={{background: 'black', width: "500px", cursor: "pointer"}} onClick={handleRecentSearchClick}>
      <p style={{color: 'red'}} inverted as='h3'>{props.description}</p>
    </Segment>
  )
}

const mapStateToProps = (state) => {
  return {
    menuVisible: state.userReducer.menuVisible
  }
}

export default connect(mapStateToProps, {recentSearch, toggleMenu})(withRouter(RecentSearch))
