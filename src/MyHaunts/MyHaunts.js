import React from 'react'
import agentWithAuth from '../HOCs/agentWithAuth'
import withCurrentGhost from '../HOCs/withCurrentGhost'
import HouseCard from '../SiteSearchResults/HouseCard.tsx'
import EditHauntButton from './EditHauntButton'
import { connect } from 'react-redux'

import FeatureHauntButton from './FeatureHauntButton'

class MyHaunts extends React.Component {

  renderMyHaunts = () => {
    return this.props.currentUser.properties.map(property=>{
      return (
        <div style={{display: 'flex', flexDirection: 'column'}}>
          <HouseCard {...property} />
          <FeatureHauntButton id={property.id} featured={property.featured} />
          <EditHauntButton id={property.id}/>
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
