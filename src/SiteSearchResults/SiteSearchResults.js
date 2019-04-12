import React from 'react'
import { connect } from 'react-redux'

import HouseCard from './HouseCard.tsx'
import AgentCard from '../AgentPage/AgentCard.tsx'
import withCurrentGhost from '../HOCs/withCurrentGhost'

class SiteSearchResults extends React.Component{

  componentWillUnmount(){
    localStorage.removeItem('houseResults')
    localStorage.removeItem('agentResults')
  }

  renderAgentResults = () => {
    return JSON.parse(localStorage.getItem('agentResults')).map((result)=>{
      return <AgentCard key={result.id} {...result}/>
    })
  }

  renderHouseResults = () => {
    return JSON.parse(localStorage.getItem('houseResults')).map((result)=>{
      return <HouseCard key={result.id} {...result}/>
    })
  }

  render(){
    let agentResults = JSON.parse(localStorage.getItem('agentResults'))
    let houseResults = JSON.parse(localStorage.getItem('houseResults'))
    return (
      <div>
        {agentResults && agentResults.length > 0 ?
          <div>
            <h3>Agents:</h3>
            {this.renderAgentResults()}
          </div> : null
        }
        {houseResults && houseResults.length > 0 ?
          <div>
            <h3>Houses:</h3>
            {this.renderHouseResults()}
          </div> : null
        }
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

export default connect(mapStateToProps)(withCurrentGhost(SiteSearchResults))
