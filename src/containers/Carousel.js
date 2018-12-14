import React from 'react'
import CarouselTile from '../components/CarouselTile'
import { connect } from 'react-redux'

class Carousel extends React.Component{

  renderCarousel = () =>{
    // console.log(this.props.featuredHouses[this.props.featuredHouseIndex]);
    let house = this.props.featuredHouses[this.props.featuredHouseIndex]
    return <CarouselTile {...house}/>
  }

  render(){
    return (
      <div>
        {this.renderCarousel()}
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

export default connect(mapStateToProps)(Carousel)
