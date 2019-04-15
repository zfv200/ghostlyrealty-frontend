import React from 'react'
import HouseCard from '../SiteSearchResults/HouseCard'
import withCurrentGhost from '../HOCs/withCurrentGhost'
import { connect } from 'react-redux'

const MyHouses = (props) => {

  const renderHouses = () => {
    return props.currentUserHouses.map(house=>{
      return <HouseCard {...house}/>
    })
  }

  return (
    <div>
      <h3>My Current Haunts:</h3>
      {renderHouses()}
    </div>
  )
}


const mapStateToProps = (state) => {
  return {
    currentUserHouses: state.userReducer.currentUserHouses
  }
}


export default connect(mapStateToProps)(withCurrentGhost(MyHouses))
