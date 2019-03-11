import React from 'react'
import { connect } from 'react-redux'

import HouseResult from './HouseResult.tsx'
import AgentCard from '../AgentPage/AgentCard'

class SiteSearchResults extends React.Component{

  componentWillUnmount(){
    localStorage.removeItem('houseResults')
    localStorage.removeItem('agentResults')
  }

  renderAgentResults = () => {
    if (localStorage.getItem('agentResults')){
      return JSON.parse(localStorage.getItem('agentResults')).map((result)=>{
        return <AgentCard key={result.id} {...result}/>
      })
    }
  }

  renderHouseResults = () => {
    if (localStorage.getItem('houseResults')){
      return JSON.parse(localStorage.getItem('houseResults')).map((result)=>{
        return <HouseResult key={result.id} {...result}/>
      })
    }
    // return this.props.houseResults.map((result)=>{
    //   return <HouseResult {...result}/>
    // })
  }

  render(){
    return (
      <div>
      <h3>Agents:</h3>
        {this.renderAgentResults()}
      <h3>Houses:</h3>
        {this.renderHouseResults()}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    agentResults: state.searchReducer.agentResults,
    houseResults: state.searchReducer.houseResults
  }
}

export default connect(mapStateToProps)(SiteSearchResults)
