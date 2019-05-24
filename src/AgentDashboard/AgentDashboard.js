import React from 'react'
import { connect } from 'react-redux'
import withCurrentGhost from '../HOCs/withCurrentGhost'
import agentWithAuth from '../HOCs/agentWithAuth'
import AddCreditsForm from '../AddCredits/AddCreditsForm'
import HouseCard from '../SiteSearchResults/HouseCard.tsx'
import SpookFormContainer from './SpookFormContainer'

import { featureMedium } from './AgentDashboardActions'

import { Header, Divider, Grid } from 'semantic-ui-react'

const AgentDashboard = (props) => {

  const handleFeatureClick = () => {
    if(props.currentUser.credits >= 10){
      props.featureMedium(props.currentUser.id)
    } else {
      alert("Please add more credits!")
    }
  }

  const renderProperties = () =>{
    return props.currentUser.properties.map(property=>{
      return (
        <div>
          <HouseCard key={property.id} {...property}/>
        </div>
      )
    })
  }

  return (
    <div>
      <Grid>
        <Grid.Column width={8}>
          <h3>Welcome, {props.currentUser.username}!</h3>
          <img src={props.currentUser.image}/>
          <h4>Spook Credits: {props.currentUser.credits}</h4>
          {!props.currentUser.featured &&
            <button onClick={handleFeatureClick} className="f6 link dim ba ph3 pv2 mb2 dib black">Become the featured Medium! (10 credits)</button>
          }
          <AddCreditsForm title='Add Credits'/>
        </Grid.Column>
        <Grid.Column width={8}>
          <SpookFormContainer houses={props.currentUser.properties}/>
        </Grid.Column>
      </Grid>
        <Header as='h2'>My Available Haunts:</Header>
      <Divider />
      {renderProperties()}
    </div>
  )
}

export default connect(null, {featureMedium})(withCurrentGhost(agentWithAuth(AgentDashboard)))
