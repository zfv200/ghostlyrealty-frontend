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
      <div className="headerItem">
        Recent searches
      </div>
    )
  }

}

export default RecentSearches
