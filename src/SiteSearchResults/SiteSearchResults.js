import React from 'react'
import { connect } from 'react-redux'

import HouseCard from './HouseCard.tsx'
import AgentCard from '../AgentPage/AgentCard.tsx'
import withCurrentGhost from '../HOCs/withCurrentGhost'

import { Divider } from 'semantic-ui-react'

class SiteSearchResults extends React.Component{

  componentWillUnmount(){
    localStorage.removeItem('houseResults')
    localStorage.removeItem('agentResults')
  }

  componentDidMount(){
    window.scrollTo(0, 0)
  }

  renderAgentResults = () => {
    return JSON.parse(localStorage.getItem('agentResults')).map((result)=>{
      return (
        <div>
          <AgentCard key={result.id} {...result}/>
        </div>
      )
    })
  }

  renderHouseResults = () => {
    return JSON.parse(localStorage.getItem('houseResults')).map((result)=>{
      return (
        <div>
          <HouseCard key={result.id} {...result}/>
        </div>
      )
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
