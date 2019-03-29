import React from 'react'
import CarouselTile from './CarouselTile'
import { connect } from 'react-redux'
import { changeCarousel } from './CarouselActions'
import styles from './Carousel.css.js'



// TODO: have the carousel slide back and forth
class Carousel extends React.Component{

  renderCarousel = () =>{
    let house = this.props.featuredHouses[this.props.featuredHouseIndex]
    // const { name, image_url } = house.props
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
    let back = "<"
    let forward = ">"
    return (
      <div>
        <div className="ma0 db relative" style={styles.carousel}>
          <ul className="pa0 ma0 relative w-100">
            {this.renderCarousel()}
          </ul>
        </div>
        <button className="bg-black db absolute transparent h2 left-0 white" style={styles.button} value="back" onClick={this.carouselClick}>{back}</button>
        <button className="bg-black db absolute transparent h2 right-0 white" style={styles.button} value="foward" onClick={this.carouselClick}>{forward}</button>
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
