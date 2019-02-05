import React from 'react'

class RecentSearches extends React.Component{
  constructor(){
    super()

    this.state={
      expanded: false
    }
  }

  render(){
    return(
      <div className="headerItem hLeft">
        <h3>Recent searches</h3>
      </div>
    )
  }

}

export default RecentSearches
