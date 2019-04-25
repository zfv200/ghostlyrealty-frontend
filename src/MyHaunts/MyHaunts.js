import React from 'react'
import agentWithAuth from '../HOCs/agentWithAuth'
import withCurrentGhost from '../HOCs/withCurrentGhost'
import HouseCard from '../SiteSearchResults/HouseCard.tsx'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom';

import FeatureHauntButton from './FeatureHauntButton'

class MyHaunts extends React.Component {

  renderMyHaunts = () => {
    return this.props.currentUser.properties.map(property=>{
      return (
        <div style={{display: 'flex', flexDirection: 'column'}}>
          <HouseCard {...property} />
          <FeatureHauntButton id={property.id} featured={property.featured} />
          <NavLink to={`/houses/${property.id}/edit`}>
            <button className="f6 link dim ph3 pv2 mb2 dib white bg-black pointer w5">
            Edit Haunt
            </button>
          </NavLink>
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
