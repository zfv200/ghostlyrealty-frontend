import React from 'react'
import HouseSearchForm from '../components/HouseSearchForm'

class HouseSearch extends React.Component{

  render(){
    return (
      <div className="homepagerow housesearch">
        <h3 className="housesearchchild">Houses for Haunt</h3>
        <HouseSearchForm/>
      </div>
    )
  }
}

export default HouseSearch
