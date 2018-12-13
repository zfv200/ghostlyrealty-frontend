import React from 'react'
import { connect } from 'react-redux'

class Carousel extends React.Component{

  render(){
    return (
      <div>

      </div>
    )
  }
}

const mapStateToProps = (state) =>{
  return {
    featuredHouses: state.houseReducer.featuredHouses
  }
}

export default connect(mapStateToProps)(Carousel)
