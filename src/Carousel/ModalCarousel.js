import React from 'react'
import ModalCarouselTile from './ModalCarouselTile'
import { connect } from 'react-redux'
import { changeCarousel } from './CarouselActions'
import styles from './Carousel.css.js'

class ModalCarousel extends React.Component{

  state={
    index: 0
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = () => {
    window.scrollTo(0, 0)
  }

  renderCarousel = () =>{
    let image = this.props.images[this.state.index]
    return (
      <React.Fragment>
        <ModalCarouselTile image={image}/>
      </React.Fragment>
    )
  }

  carouselClick = (e) => {
    this.props.changeCarousel(e.target.value)
  }

  checkIndex = (newIndex) => {
    let length = this.props.images.length - 1
    if(newIndex > length){
      return 0
    } else if (newIndex < 0){
      return length
    } else {
      return newIndex
    }
  }

  carouselClick = (e) => {
    if(e.target.value === "forward"){
      let newIndex = this.checkIndex(this.state.index + 1)
      this.setState({
        index: newIndex
      })
    } else {
      let newIndex = this.checkIndex(this.state.index - 1)
      this.setState({
        index: newIndex
      })
    }
  }

  hideCarousel = (e) => {
    if(e.target.value !== "forward" && e.target.value !== "back"){
      this.props.changeCarouselShowing()
    }
  }

  render(){
    let childAndButton = {...styles.carouselChild, ...styles.carouselButton}
    let back = "<"
    let forward = ">"
    return (
      <div
        style={{zIndex: 4, position: "absolute", top: "80px", left: "0px", width: "100%", height: window.innerHeight, background: "gray"}}
        onClick={this.hideCarousel}>
        <div>
          <ul>
            {this.renderCarousel()}
          </ul>
        </div>
        <button
          className="bg-black db absolute transparent h2 left-50 white pointer"
          style={styles.button}
          value={"back"}
          onClick={this.carouselClick}>{back}
        </button>
        <button
          className="bg-black db absolute transparent h2 right-0 white pointer"
          style={{...styles.button}}
          value={"forward"}
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

export default connect(mapStateToProps, {changeCarousel})(ModalCarousel)
