import React from 'react'
import { connect } from 'react-redux'
import { searchSite } from '../actions/actions'
import { withRouter } from 'react-router-dom';

class SearchBar extends React.Component {
  constructor(){
    super()

    this.state={
      searchTerm: ''
    }
  }

  handleChange = (e) => {
    this.setState({
      searchTerm: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.searchSite(this.state.searchTerm)
    this.props.history.push('/results')
  }

  render(){
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" onChange={this.handleChange}/>
        </form>
      </div>
    )
  }
}

export default connect(null, {searchSite})(withRouter(SearchBar))
