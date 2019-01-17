import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { searchProperties, searchSite, addBlankSearchError, clearBlankSearchError } from '../actions/actions'
import isEqual from 'lodash.isequal'
import BlankSearch from './BlankSearch'
// var isEqual = require('lodash.isequal');

class HouseSearchForm extends React.Component{

  constructor(){
    super()

    this.state={
      typedSearch: '',
      solo_haunt: false,
      burial_ground: false,
      complexSearch: false,
    }

    // this.blankState={
    //   typedSearch: '',
    //   solo_haunt: false,
    //   complexSearch: false,
    // }
  }

  handleChange = (e) => {
    // this.props.clearBlankSearchError()
    if (e.target.id!=="typedSearch"){
      let currentState = this.state[e.target.id]
      this.setState({[e.target.id]: !currentState, complexSearch: !currentState})
    } else {
      this.setState({
        [e.target.id]: e.target.value
      })
    }
  }

  // nothingEnteredYet = () => {
  //   return isEqual(this.state, this.blankState)
  // }

  handleSubmit = (e) => {
    e.preventDefault()
    // if (this.nothingEnteredYet()){
    //   return this.props.addBlankSearchError()
    // }
    if (this.state.complexSearch){
      this.props.searchProperties(this.state)
      this.props.history.push('/houses')
    } else {
      this.props.searchSite(this.state.typedSearch)
      this.props.history.push('/results')
    }
  }

  // renderBlankSearchError = () => {
  //   return this.props.blankSearchError ? <BlankSearch /> : null
  // }

  render(){
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input id="typedSearch" onChange={this.handleChange} placeholder="House or building name"/>
          <input id="solo_haunt" type="checkbox" value={this.state.solo_haunt} onChange={this.handleChange}/>Solo Haunt
          <input id="burial_ground" type="checkbox" value={this.state.burial_ground} onChange={this.handleChange}/>Built on top of Burial Ground
          <button type="submit">Search</button>
        </form>
      </div>
    )
  }
}

// const mapStateToProps = (state) => {
//   return {
//     blankSearchError: state.searchReducer.blankSearch
//   }
// }


export default connect(null, {searchProperties, searchSite, addBlankSearchError, clearBlankSearchError})(withRouter(HouseSearchForm))
