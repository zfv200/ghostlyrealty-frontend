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
    window.scrollTo(0, 0)
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
        <div style={{display: "flex"}}>
          <img style={{height: "400px", paddingRight: "20px"}} src={this.state.house['image_url']}/>
          <AgentCard {...this.state.medium}/>
        </div>
        <h3>{this.state.house.address}</h3>
        {this.props.currentUser ? <HauntHouseButton id={parseInt(this.props.match.params.id)}/> : null}
        <h2>About this Haunt:</h2>
        <p>{this.state.house.description}</p>
      </div>
    )
  }
}

export default compose(
  withCurrentGhost
)(HouseShowPage)
