import React from 'react'
import { connect } from 'react-redux'
import RecentSearch from './RecentSearch'
import styles from './UserHeader.css.js'
import withAuth from '../HOCs/withAuth'

class RecentSearchesContainer extends React.Component{
  constructor(){
    super()

    this.state={
      expanded: false
    }
  }

  handleMouse = () => {
    let currentState = this.state.expanded
    this.setState({
      expanded: !currentState
    })
  }

  renderRecentSearches = () => {
    return this.props.recentSearches.map(search=>{
      return <RecentSearch key={search.id} {...search}/>
    })
  }

  render(){
    return(
      <div onMouseEnter={this.handleMouse} onMouseLeave={this.handleMouse} style={styles.hLeft}>
        <h3>Recent searches</h3>
        <div style={styles.recentSearchesContainer}>
          {this.state.expanded === true ? this.renderRecentSearches() : null}
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    recentSearches: state.userReducer.currentUserSearches
  }
}

export default connect(mapStateToProps)(withAuth(RecentSearchesContainer, true)) //if it should
//render if the user is in or not, is the second arg for withAuth
