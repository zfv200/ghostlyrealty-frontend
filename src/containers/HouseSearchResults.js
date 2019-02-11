import React from 'react'
import { connect } from 'react-redux'
import HousePropertyResult from '../components/HousePropertyResult'
import HouseResult from '../components/HouseResult'

class HouseSearchResults extends React.Component {

  renderHouseResults = () =>{
    if (localStorage.getItem('houseResults')){
      return JSON.parse(localStorage.getItem('houseResults')).map(result=>{
        return <HouseResult {...result} />
      })
    }
    // return this.props.houseResults.map(result=>{
    //   return <HousePropertyResult {...result} />
    // })
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
