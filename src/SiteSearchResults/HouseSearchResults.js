import React from 'react'
import { connect } from 'react-redux'
import HouseCard from './HouseCard'
import withCurrentGhost from '../HOCs/withCurrentGhost'


class HouseSearchResults extends React.Component {

  componentDidMount(){
    window.scrollTo(0, 0)
  }

  renderHouseResults = () =>{
    if (localStorage.getItem('houseResults') && localStorage.getItem('houseResults') !== "undefined"){
      return JSON.parse(localStorage.getItem('houseResults')).map(result=>{
        return <HouseCard {...result} />
      })
    }
  }

  render(){
    return (
      <div>
        {this.renderHouseResults()}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    houseResults: state.searchReducer.houseResults
  }
}


export default connect(mapStateToProps)(withCurrentGhost(HouseSearchResults))
