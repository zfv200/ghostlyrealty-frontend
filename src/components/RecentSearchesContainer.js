import React from 'react'

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

  }

  render(){
    return(
      <div onMouseEnter={this.handleMouse} onMouseLeave={this.handleMouse} className="headerItem hLeft">
        <h3>Recent searches</h3>
        {this.state.expanded === true ? <div>hi</div> : null}
      </div>
    )
  }

}

export default RecentSearchesContainer
