import React from 'react'
import CarouselTile from './CarouselTile'
import { connect } from 'react-redux'
import { changeCarousel } from './CarouselActions'
import styles from './Carousel.css.js'

import linkButtonWithForm from '../HOCs/linkButtonWithForm'


class Carousel extends React.Component{

  state={
    index: 0
  }

  renderCarousel = () =>{
    let image = this.props.images[this.state.index]
    // const { name, image_url } = house.props
    return (
      <React.Fragment>
        <CarouselTile image={image}/>
      </React.Fragment>
    )
  }

  carouselClick = (e) => {
    this.props.changeCarousel(e.target.value)
  }

  carouselClick = (e) => {
    // console.log(this.state.index);
    if(e.target.value){
      let newIndex = this.state.index += 1
      this.setState({
        index: newIndex
      })
    } else {
      let newIndex = this.state.index -= 1
      this.setState({
        index: newIndex
      })
    }
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
        <button
          className="bg-black db absolute transparent h2 left-50 white pointer"
          style={styles.button}
          value={false}
          onClick={this.carouselClick}>{back}
        </button>
        <button
          className="bg-black db absolute transparent h2 right-0 white pointer"
          style={{...styles.button, right: "127.5px"}}
          value={true}
          onClick={this.carouselClick}>{forward}
        </button>
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



export default connect(mapStateToProps, {changeCarousel})(linkButtonWithForm(Carousel))
