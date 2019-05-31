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

  scrollToTop = () => {
    const c = document.documentElement.scrollTop || document.body.scrollTop;
    if (c > 0) {
      window.requestAnimationFrame(this.scrollToTop);
      window.scrollTo(0, c - c / 8);
    }
  };

  render(){
    return (
      <div>
        <div className="flex flex-column">
          <Carousel
          scrollToTop={this.scrollToTop}
          images={this.props.images}
          featuredHouses={this.props.featuredHouses}
          isPlaying={true}
          style={{height: "400px", width: "925px", border: "solid", margin: "auto"}}
          />
          <HouseSearchForm />
          <FeaturedAgent />
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) =>{
  const images = state.houseReducer.featuredHouses.map(house=>house.images[0])

  return {
    images: images,
    featuredHouses: state.houseReducer.featuredHouses
    // featuredHouseIndex: state.houseReducer.featuredHouseIndex
  }
}


export default connect(mapStateToProps, {fetchFeaturedHouses, fetchFeaturedAgent, setCarouselIndexOnRefresh})(withCurrentGhost(HomePage))
