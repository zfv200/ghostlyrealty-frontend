import React from 'react'
import { connect } from 'react-redux'
import HousePropertyResult from '../components/HousePropertyResult'

class HouseSearchResults extends React.Component {

  renderHouseResults = () =>{
    return this.props.houseResults.map(result=>{
      return <HousePropertyResult {...result} />
    })
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


export default connect(mapStateToProps)(HouseSearchResults)
