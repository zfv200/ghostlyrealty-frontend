import React from 'react'
import { connect } from 'react-redux'
import { fetchFeaturedHouses, fetchFeaturedAgent } from './HomePageActions.js'
import HouseSearchForm from '../HouseSearchForm/HouseSearchForm'
import Carousel from '../Carousel/Carousel'
import AgentCard from '../AgentPage/AgentCard'
import withLoader from '../HOCs/withLoader'
import withCurrentGhost from '../HOCs/withCurrentGhost'
import '../App.css';
import './HomePage.css'


class HomePage extends React.Component {

  componentDidMount(){
    this.props.fetchFeaturedHouses()
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


export default connect(mapStateToProps, {fetchFeaturedHouses, fetchFeaturedAgent})(withCurrentGhost(HomePage))
