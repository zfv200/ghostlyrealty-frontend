import React from 'react'
import withCurrentGhost from '../HOCs/withCurrentGhost'
import { fetchMedium } from './MediumShowPageActions'
import HouseCard from '../SiteSearchResults/HouseCard.tsx'

class MediumShowPage extends React.Component{
  state={
    medium: {},
    properties: []
  }

  componentDidMount(){
    window.scrollTo(0, 0)
    let id = parseInt(this.props.match.params.id)
    fetchMedium(id)
    .then(json=>{
      this.setState({...json})
    })
  }

  renderProperties = () =>{
    return this.state.properties.map(property=>{
      return <HouseCard {...property}/>
    })
  }

  render(){
    return (
      <div>
        <h3>{this.state.medium.username}</h3>
        <img src={this.state.medium.image} />
        <h3>Current Available Haunts:</h3>
        {this.renderProperties()}
      </div>
    )
  }
}

export default withCurrentGhost(MediumShowPage)