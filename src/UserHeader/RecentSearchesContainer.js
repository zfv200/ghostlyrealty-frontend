import React from 'react'
import { connect } from 'react-redux'
import RecentSearch from './RecentSearch'
import styles from './UserHeader.css.js'
import withAuth from '../HOCs/withAuth'

import { Dropdown, Menu } from 'semantic-ui-react'


class RecentSearchesContainer extends React.Component{

  renderRecentSearches = () => {
    return this.props.recentSearches.map(search=>{
      return <RecentSearch key={search.id} {...search}/>
    })
  }

  render(){
    return(
      <Menu.Item>
        <Dropdown text='Recent Searches' options={this.renderRecentSearches()} fluid simple />
      </Menu.Item>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    recentSearches: state.userReducer.currentUserSearches
  }
}
//
// <div className={this.props.recentSearches.length > 0 ? "pointer dropdown-parent" : "pointer"} style={styles.hLeft}>
//   <h3>Recent searches</h3>
//   <div className="dropdown-children bb" style={styles.recentSearchesContainer}>
//     {this.renderRecentSearches()}
//   </div>
// </div>

export default connect(mapStateToProps)(withAuth(RecentSearchesContainer, true)) //if it should
//render if the user is in or not, is the second arg for withAuth
