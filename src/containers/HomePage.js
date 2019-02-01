import React from 'react'
import { connect } from 'react-redux'
import { fetchFeaturedHouses, fetchCurrentGhost } from '../actions/actions.js'

import HouseSearch from './HouseSearch'
import Carousel from './Carousel'
import FeaturedAgent from '../components/FeaturedAgent'
import '../App.css';


class HomePage extends React.Component {

  componentDidMount(){
    this.props.fetchFeaturedHouses()
    this.props.fetchCurrentGhost()
  }

  render(){
    return (
      <div className="flex-grid">
        <Carousel />
        <HouseSearch />
        <FeaturedAgent />
      </div>
    )
  }
}



// function mapDispatchToProps(dispatch) {
//   return({
//     fetchFeaturedHouses: fetchFeaturedHouses,
//   })
// }

export default connect(null, {fetchFeaturedHouses, fetchCurrentGhost})(HomePage)
