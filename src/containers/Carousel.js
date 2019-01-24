import React from 'react'
import CarouselTile from '../components/CarouselTile'
import { connect } from 'react-redux'
import { changeCarousel } from '../actions/actions'

// TODO: have the carousel slide back and forth
class Carousel extends React.Component{

  renderCarousel = () =>{
    let house = this.props.featuredHouses[this.props.featuredHouseIndex]
    return (
      <React.Fragment>
        <CarouselTile {...house}/>
      </React.Fragment>
    )
  }

  carouselClick = (e) => {
    this.props.changeCarousel(e.target.value)
  }

  render(){
    return (
      <div id="carousel" className="homepagerow">
        <button className="carouselChild carouselButton" value="back" onClick={this.carouselClick}>back</button>
        {this.renderCarousel()}
        <button className="carouselChild carouselButton" value="foward" onClick={this.carouselClick}>forward</button>
      </div>
    )
  }
}

const mapStateToProps = (state) =>{
  return {
    featuredHouses: state.houseReducer.featuredHouses,
    featuredHouseIndex: state.houseReducer.featuredHouseIndex
  }
}

export default connect(mapStateToProps, {changeCarousel})(Carousel)
