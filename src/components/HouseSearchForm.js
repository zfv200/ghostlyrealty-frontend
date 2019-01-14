import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { searchProperties, searchSite } from '../actions/actions'

class HouseSearchForm extends React.Component{

  constructor(){
    super()

    this.state={
      typedSearch: ''
    }
  }

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.searchSite(this.state.typedSearch)
    this.props.history.push('/results')
  }

  render(){
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input id="typedSearch" onChange={this.handleChange} placeholder="House or building name"/>
          <button type="submit">Search</button>
        </form>
      </div>
    )
  }
}

export default connect(null, {searchProperties, searchSite})(withRouter(HouseSearchForm))
