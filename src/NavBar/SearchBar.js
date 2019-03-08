import React from 'react'
import { connect } from 'react-redux'
import { searchSite } from '../actions/actions'
import { withRouter } from 'react-router-dom';
import { addBlankSearchError, clearBlankSearchError } from '../actions/actions'
import BlankSearch from './BlankSearch'
import styles from './NavBar.css.js'

// TODO: is there a good way to abstract the blank search functionality to wrap all the search forms?


export class SearchBar extends React.Component {
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
    if (this.state.searchTerm===''){
      return this.props.addBlankSearchError()
    } else {
      this.props.clearBlankSearchError()
    }
    this.props.searchSite(this.state.searchTerm)
    this.setState({
      searchTerm: ''
    })
    this.props.history.push('/results')
  }

  renderBlankSearchError = () => {
    return this.props.blankSearchError ? <BlankSearch /> : null
  }

  render(){
    return (
      <div>
        <div>
          {this.renderBlankSearchError()}
          <form id="nav-search-bar-form" onSubmit={this.handleSubmit}>
            <input id="nav-search-bar" style={styles.siteSearchBar} placeholder="house or agent name" value={this.state.searchTerm} type="text" onChange={this.handleChange}/>
          </form>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    blankSearchError: state.searchReducer.blankSearch
  }
}

export default connect(mapStateToProps, {searchSite, addBlankSearchError, clearBlankSearchError})(withRouter(SearchBar))
