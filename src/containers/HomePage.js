import React from 'react'
import NavBar from '../components/NavBar'
import { connect } from 'react-redux'
import { fetchFeaturedHouses } from '../actions/actions.js'
import Carousel from './Carousel'

class HomePage extends React.Component {

  componentDidMount(){
    this.props.fetchFeaturedHouses()
  }

  render(){
    return (
      <div>
        <NavBar />
        <Carousel />
      </div>
    )
  }
}

// function mapDispatchToProps(dispatch) {
//   return({
//     fetchFeaturedHouses: fetchFeaturedHouses,
//   })
// }

export default connect(null, {fetchFeaturedHouses})(HomePage)
