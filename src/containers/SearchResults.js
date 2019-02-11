import React from 'react'
import { connect } from 'react-redux'

import AgentResult from '../components/AgentResult'
import HouseResult from '../components/HouseResult'

class SearchResults extends React.Component{

  componentWillUnmount(){
    localStorage.removeItem('houseResults')
    localStorage.removeItem('agentResults')
  }

  renderAgentResults = () => {
    if (localStorage.getItem('agentResults')){
      return JSON.parse(localStorage.getItem('agentResults')).map((result)=>{
        return <AgentResult {...result}/>
      })
    }
    // return this.props.agentResults.map((result)=>{
    //   // TODO: make the result so that it can have an id for react component's unique key
    //   return <AgentResult {...result}/>
    // })
  }

  renderHouseResults = () => {
    if (localStorage.getItem('houseResults')){
      return JSON.parse(localStorage.getItem('houseResults')).map((result)=>{
        return <HouseResult {...result}/>
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

export default connect(mapStateToProps)(SearchResults)
