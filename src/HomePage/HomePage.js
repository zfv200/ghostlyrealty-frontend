import React from 'react'
import ReactDOM from 'react-dom';

import { connect } from 'react-redux'
import { fetchFeaturedHouses, fetchFeaturedAgent, setCarouselIndexOnRefresh } from './HomePageActions.js'
import HouseSearchForm from '../HouseSearchForm/HouseSearchForm'
import Carousel from '../Carousel/Carousel'
import FeaturedAgent from '../FeaturedAgent/FeaturedAgent'
import withLoader from '../HOCs/withLoader'
import withCurrentGhost from '../HOCs/withCurrentGhost'
import '../App.css';
import './HomePage.css'


class HomePage extends React.Component {

  componentDidMount(){
    window.scrollTo(0, 0)
    this.props.setCarouselIndexOnRefresh()
    this.props.fetchFeaturedHouses()
    this.props.fetchFeaturedAgent()
  }

  render(){
    return (
      <div>
        <div className="flex flex-column">
          <Carousel />
          <HouseSearchForm />
          <FeaturedAgent />
        </div>
      </div>
    )
  }
}


export default connect(null, {fetchFeaturedHouses, fetchFeaturedAgent, setCarouselIndexOnRefresh})(withCurrentGhost(HomePage))
