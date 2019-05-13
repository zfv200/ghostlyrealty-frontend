import React from 'react'
import CarouselTile from './CarouselTile'
import { connect } from 'react-redux'
import { changeCarousel } from './CarouselActions'
import styles from './Carousel.css.js'

import CustomDotGroup from './CustomDotGroup'
import 'pure-react-carousel/dist/react-carousel.es.css';

import { Divider } from "semantic-ui-react";
import { CarouselProvider, ButtonBack, ButtonNext, DotGroup, Image, Slide, Slider } from "pure-react-carousel";


class Carousel extends React.Component{

  renderCarousel = () =>{
    return this.props.featuredHouses.map((house)=>{
      return (
        <Slide>
          <h3 className="i pl2">{house.name}</h3>
          <CarouselTile {...house}/>
        </Slide>
      )
    })
  }

  carouselClick = (e) => {
    this.props.changeCarousel(e.target.value)
  }

  render(){
    const slideLength = this.props.featuredHouses.length
    const images = this.props.featuredHouses.map(house=>house.images[0])
    return (
        <CarouselProvider
          naturalSlideWidth={0.2}
          naturalSlideHeight={0.2}
          totalSlides={slideLength}
          isPlaying={true}
          interval={5000}
        >
          <Slider style={{height: "400px", width: "925px", border: "solid", margin: "auto"}}>
            {this.renderCarousel()}
          </Slider>
          <Divider />
          <CustomDotGroup images={images} slides={slideLength}/>
        </CarouselProvider>
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
