import React from 'react'
import NavBar from '../components/NavBar'
import { connect } from 'react-redux'
import { fetchFeaturedHouses } from '../actions/actions.js'
import Carousel from './Carousel'
import AgentCard from '../components/AgentCard'

class HomePage extends React.Component {

  componentDidMount(){
    this.props.fetchFeaturedHouses()
  }

  render(){
    return (
      <div>
        <NavBar />
        <Carousel />
        <AgentCard />
      </div>
    )
  }
}

// function mapDispatchToProps(dispatch) {
//   return({
//     fetchFeaturedHouses: fetchFeaturedHouses,
//   })
// }

export default connect(null, {fetchFeaturedHouses})(HomePage)
