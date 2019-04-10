import React from 'react'
import agentWithAuth from '../HOCs/agentWithAuth'
import withCurrentGhost from '../HOCs/withCurrentGhost'
import HouseCard from '../SiteSearchResults/HouseCard.tsx'

class MyHaunts extends React.Component {

  renderMyHaunts = () => {
    return this.props.currentUser.properties.map(property=>{
      return <HouseCard {...property} />
    })
  }

  render(){
    return (
      <div>
        {this.renderMyHaunts()}
      </div>
    )
  }
}

export default withCurrentGhost(agentWithAuth(MyHaunts))
