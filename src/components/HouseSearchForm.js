import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { searchProperties, searchSite } from '../actions/actions'

class HouseSearchForm extends React.Component{

  constructor(){
    super()

    this.state={
      typedSearch: '',
      solo_haunt: false,
      complexSearch: false
    }
  }

  handleChange = (e) => {
    if (e.target.id==="soloHaunt"){
      let currentState = this.state.solo_haunt
      this.setState({solo_haunt: !currentState, complexSearch: !currentState})
    } else {
      this.setState({
        [e.target.id]: e.target.value
      })
    }
  }

  handleSubmit = (e) => {
    e.preventDefault()
    // TODO: "please enter something to search for! error"
    if (this.state.complexSearch){
      this.props.searchProperties(this.state)
      this.props.history.push('/houses')
    } else {
      this.props.searchSite(this.state.typedSearch)
      this.props.history.push('/results')
    }
  }

  render(){
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input id="typedSearch" onChange={this.handleChange} placeholder="House or building name"/>
          <input id="soloHaunt" type="checkbox" value={this.state.solo_haunt} onChange={this.handleChange}/>Solo Haunt
          <button type="submit">Search</button>
        </form>
      </div>
    )
  }
}

export default connect(null, {searchProperties, searchSite})(withRouter(HouseSearchForm))
