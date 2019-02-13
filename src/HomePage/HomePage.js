import React from 'react'
import { connect } from 'react-redux'
import { fetchFeaturedHouses, fetchCurrentGhost } from './HomePageActions.js'

import HouseSearchForm from '../HouseSearchForm/HouseSearchForm'
import Carousel from '../Carousel/Carousel'
import FeaturedAgent from '../FeaturedAgent/FeaturedAgent'
import '../App.css';
import './HomePage.css'


class HomePage extends React.Component {

  componentDidMount(){
    this.props.fetchFeaturedHouses()
    this.props.fetchCurrentGhost()
  }

  render(){
    return (
      <div>
        <Carousel />
        <HouseSearchForm />
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
