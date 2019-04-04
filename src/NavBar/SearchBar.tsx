import React from 'react'
import { connect } from 'react-redux'
import { searchSite } from '../actions/actions'
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { addBlankSearchError, clearBlankSearchError } from '../actions/actions'
import BlankSearch from './BlankSearch'
import styles from './NavBar.css.js'

// TODO: is there a good way to abstract the blank search functionality to wrap all the search forms?
// import { rootReducer } from '../index.js'

interface StateProps {
  blankSearchError: boolean
}

interface DispatchProps {
  searchSite: (searchTerm: string) => void,
  addBlankSearchError: () => void,
  clearBlankSearchError: () => void
}

type Props = StateProps & DispatchProps & RouteComponentProps<any>

interface State {
  searchTerm: string
}

export class SearchBar extends React.Component<Props, State> {

  state={
    searchTerm: ''
  }

  handleChange = (e: React.FormEvent<HTMLInputElement>): void => {
    const target = e.target as HTMLTextAreaElement;
    this.setState({
      searchTerm: target.value
    })
  }

  handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (this.state.searchTerm===''){
      this.props.addBlankSearchError()
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
        {this.renderBlankSearchError()}
        <form id="nav-search-bar-form" onSubmit={(e)=>this.handleSubmit(e)}>
          <input id="nav-search-bar" style={styles.siteSearchBar} placeholder="house or agent name" value={this.state.searchTerm} type="text" onChange={(e)=>this.handleChange(e)}/>
        </form>
      </div>
    )
  }
}

const mapStateToProps = (state: any): StateProps => {
  return {
    blankSearchError: state.searchReducer.blankSearch
  }
}

export default connect(mapStateToProps, {searchSite, addBlankSearchError, clearBlankSearchError})(withRouter(SearchBar))
