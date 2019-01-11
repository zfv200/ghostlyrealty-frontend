import React from 'react'
import { connect } from 'react-redux'

import AgentResult from '../components/AgentResult'

class SearchResults extends React.Component{

  renderAgentResults = () => {
    return this.props.results.map((result)=>{
      // TODO: make the result so that it can have an id for react component's unique key
      return <AgentResult {...result} />
    })
  }

  render(){
    return (
      <div>
        {this.renderAgentResults()}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    results: state.searchReducer.agentResults
  }
}

export default connect(mapStateToProps)(SearchResults)
