import React from 'react'
import NavBar from '../components/NavBar'
import { connect } from 'react-redux'
import { fetchFeaturedHouses } from '../actions/actions.js'
import Carousel from './Carousel'
import FeaturedAgent from '../components/FeaturedAgent'
import '../App.css';


class HomePage extends React.Component {

  componentDidMount(){
    this.props.fetchFeaturedHouses()
  }

  render(){
    return (
      <div id="homepage">
        <div className="homepagecomps">
          <Carousel />
          <FeaturedAgent />
        </div>
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
