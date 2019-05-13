import PropTypes from "prop-types";
import { Dot } from "pure-react-carousel";
import React from "react";
import { Button, Container } from "semantic-ui-react";

const CustomDotGroup = ({ slides, size, images }) => {
  return (
  <Container textAlign="center">
    <Button.Group size={size}>
      {[...Array(slides).keys()].map((slide, index) => (
        <Button style={{opacity: 1, color: 'white'}} as={Dot} key={slide} icon="circle" slide={slide}>
          {<img src={images[index]}
          style={{width: "40px", height: "40px"}}
          >

          </img>}
        </Button>
      ))}
    </Button.Group>
  </Container>
)};

CustomDotGroup.defaultProps = {
  size: "mini"
};

CustomDotGroup.propTypes = {
  slides: PropTypes.number.isRequired,
  size: PropTypes.string
};

// <Button as={Dot} key={slide} icon="circle" slide={slide} />

export default CustomDotGroup;
