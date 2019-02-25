import React from 'react'
import CarouselTile from './CarouselTile'
import { connect } from 'react-redux'
import { changeCarousel } from './CarouselActions'
import styles from './Carousel.css.js'



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
    let childAndButton = {...styles.carouselChild, ...styles.carouselButton}
    return (
      <div style={styles.carousel}>
        <button style={childAndButton} value="back" onClick={this.carouselClick}>back</button>
        {this.renderCarousel()}
        <button style={childAndButton} value="foward" onClick={this.carouselClick}>forward</button>
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
