import React from 'react'
import { connect } from 'react-redux'
import RecentSearch from './RecentSearch'

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
      return <RecentSearch {...search}/>
    })
  }

  render(){
    return(
      <div onMouseEnter={this.handleMouse} onMouseLeave={this.handleMouse} className="headerItem hLeft">
        <h3>Recent searches</h3>
        <div className="recentSearchesContainer">
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

export default connect(mapStateToProps)(RecentSearchesContainer)
