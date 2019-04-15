import React from 'react'
import { fetchHouse } from './HouseShowPageActions'
import AgentCard from '../AgentPage/AgentCard.tsx'

class HouseShowPage extends React.Component {
  state={
    house: {}
  }

  componentDidMount(){
    let id = parseInt(this.props.match.params.id)
    fetchHouse(id)
    .then(json=>{
      this.setState({...json})
    })
  }

  render(){
    console.log(this.state);
    return (
      <div>
        <h1>{this.state.house.name}</h1>
        <img src={this.state.house['image_url']}/>
        <h3>{this.state.house.address}</h3>
        <AgentCard {...this.state.medium}/>
      </div>
    )
  }
}

export default HouseShowPage
