import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { searchProperties, searchSite } from '../actions/actions'

class HouseSearchForm extends React.Component{

  constructor(){
    super()

    this.state={
      typedSearch: '',
      soloHaunt: false
    }
  }

  handleChange = (e) => {
    if (e.target.id==="soloHaunt"){
      let currentState = this.state.soloHaunt
      this.setState({soloHaunt: !currentState})
    } else {
      this.setState({
        [e.target.id]: e.target.value
      })
    }
  }

  handleSubmit = (e) => {
    e.preventDefault()
    // TODO: incorporate the whole state object into properties search, pick up here tomorrow
    this.props.searchSite(this.state.typedSearch)
    this.props.history.push('/results')
  }

  render(){
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input id="typedSearch" onChange={this.handleChange} placeholder="House or building name"/>
          <input id="soloHaunt" type="checkbox" value={this.state.soloHaunt} onChange={this.handleChange}/>Solo Haunt
          <button type="submit">Search</button>
        </form>
      </div>
    )
  }
}

export default connect(null, {searchProperties, searchSite})(withRouter(HouseSearchForm))
