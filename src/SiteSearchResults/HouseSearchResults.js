import React from 'react'
import { connect } from 'react-redux'
import HouseResult from './HouseResult'
import withCurrentGhost from '../HOCs/withCurrentGhost'


class HouseSearchResults extends React.Component {

  renderHouseResults = () =>{
    if (localStorage.getItem('houseResults')){
      return JSON.parse(localStorage.getItem('houseResults')).map(result=>{
        return <HouseResult {...result} />
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
