import React from 'react'
import TestCarouselTile from './TestCarouselTile'
import { connect } from 'react-redux'
import { changeCarousel } from './CarouselActions'
import styles from './Carousel.css.js'

import CustomDotGroup from './CustomDotGroup'
import 'pure-react-carousel/dist/react-carousel.es.css';

import { Divider } from "semantic-ui-react";
import { CarouselProvider, ButtonBack, ButtonNext, DotGroup, Image, Slide, Slider } from "pure-react-carousel";


class TestCarousel extends React.Component{

  renderCarousel = () =>{
    return this.props.featuredHouses.map((house)=>{
      return (
        <Slide>
            <TestCarouselTile {...house}/>
        </Slide>
      )
    })
  }

  carouselClick = (e) => {
    this.props.changeCarousel(e.target.value)
  }

  render(){
    const slideLength = this.props.featuredHouses.length
    return (
        <CarouselProvider
          naturalSlideWidth={0.2}
          naturalSlideHeight={0.2}
          totalSlides={slideLength}
        >
        <Slider style={{height: "400px", width: "925px", border: "solid"}}>
          {this.renderCarousel()}
        </Slider>
        <Divider />
        <CustomDotGroup slides={slideLength}/>
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



export default connect(mapStateToProps, {changeCarousel})(TestCarousel)
