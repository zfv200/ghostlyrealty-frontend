import React from 'react'
import { compose } from 'redux'
import { fetchHouse } from './HouseShowPageActions'
import AgentCard from '../AgentPage/AgentCard.tsx'
import HauntHouseButton from '../SiteSearchResults/HauntHouseButton'

import withCurrentGhost from '../HOCs/withCurrentGhost'

class HouseShowPage extends React.Component {
  state={
    house: {},
    medium: {}
  }

  componentDidMount(){
    let id = parseInt(this.props.match.params.id)
    fetchHouse(id)
    .then(json=>{
      this.setState({...json})
    })
  }

  render(){
    return (
      <div>
        <h1>{this.state.house.name}</h1>
        <img src={this.state.house['image_url']}/>
        <h3>{this.state.house.address}</h3>
        {this.props.currentUser ? <HauntHouseButton id={parseInt(this.props.match.params.id)}/> : null}
        <AgentCard {...this.state.medium}/>
      </div>
    )
  }
}

export default compose(
  withCurrentGhost
)(HouseShowPage)
