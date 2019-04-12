import React from 'react'
import agentWithAuth from '../HOCs/agentWithAuth'
import withCurrentGhost from '../HOCs/withCurrentGhost'
import HouseCard from '../SiteSearchResults/HouseCard.tsx'
import { connect } from 'react-redux'
import FeatureHauntButton from './FeatureHauntButton'

class MyHaunts extends React.Component {

  renderMyHaunts = () => {
    return this.props.currentUser.properties.map(property=>{
      return (
        <div>
          <HouseCard {...property} />
          <FeatureHauntButton id={property.id} featured={property.featured} />
        </div>
      )
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
