import React from 'react'
import CarouselTile from './CarouselTile'
import { connect } from 'react-redux'
// import { changeCarousel } from './CarouselActions'
import styles from './Carousel.css.js'

import linkButtonWithForm from '../HOCs/linkButtonWithForm'
import modalWrapper from '../HOCs/modalWrapper'
import CustomDotGroup from './CustomDotGroup'
import 'pure-react-carousel/dist/react-carousel.es.css';

import { Divider } from "semantic-ui-react";
import { CarouselProvider, ButtonBack, ButtonNext, DotGroup, Image, Slide, Slider } from "pure-react-carousel";

class Carousel extends React.Component{

  renderCarousel = () =>{
    if(this.props.featuredHouses){
      return this.props.featuredHouses.map((house)=>{
        return (
          <Slide>
          <h3 className="i pl2">{house.name}</h3>
          <CarouselTile
          {...house}
          image={house.images[0]}/>
          </Slide>
        )
      })
    } else {
      return this.props.images.map((image)=>{
        return (
          <Slide>
            <CarouselTile
            image={image}
            id={this.props.id}
            changeCarouselShowing={this.props.changeCarouselShowing}/>
          </Slide>
        )
      })
    }
  }

  length = () => {
    return this.props.featuredHouses ? this.props.featuredHouses.length : (this.props.images ? this.props.images.length : 1)
  }

  render(){
    const slideLength = this.length()
    return (
        <CarouselProvider
          naturalSlideWidth={0.2}
          naturalSlideHeight={0.2}
          totalSlides={slideLength}
          isPlaying={this.props.isPlaying}
          interval={5000}
        >
          <Slider style={this.props.style}>
            {this.renderCarousel()}
          </Slider>
          <Divider />
          <CustomDotGroup scrollToTop={this.props.scrollToTop} images={this.props.images} slides={slideLength}/>
        </CarouselProvider>
    )
  }
}

export default Carousel
