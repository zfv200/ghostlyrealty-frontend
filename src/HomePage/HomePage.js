import React from 'react'
import { connect } from 'react-redux'
import { fetchFeaturedHouses, fetchCurrentGhost, fetchFeaturedAgent } from './HomePageActions.js'

import HouseSearchForm from '../HouseSearchForm/HouseSearchForm'
import Carousel from '../Carousel/Carousel'
import AgentCard from '../AgentPage/AgentCard'
import '../App.css';
import './HomePage.css'


class HomePage extends React.Component {

  componentDidMount(){
    this.props.fetchFeaturedHouses()
    this.props.fetchCurrentGhost()
    this.props.fetchFeaturedAgent()
  }

  render(){
    return (
      <div>
        <Carousel />
        <HouseSearchForm />
        <AgentCard {...this.props.featuredAgent}/>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    featuredAgent: state.agentReducer.featuredAgent
  }
}


export default connect(mapStateToProps, {fetchFeaturedHouses, fetchCurrentGhost, fetchFeaturedAgent})(HomePage)
