import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { searchProperties, searchSite } from './HouseSearchActions'
import styles from './HouseSearchForm.css.js'

import { Form, Button, Segment } from 'semantic-ui-react'

class HouseSearchForm extends React.Component{

  constructor(){
    super()

    this.state={
      typedSearch: '',
      solo_haunt: false,
      burial_ground: false,
      complexSearch: false,
      new_family: false,
      witch_friendly: false
    }
  }

  handleChange = (e) => {
    if (e.target.id!=="typedSearch"){
      let currentState = this.state[e.target.id]
      this.setState({[e.target.id]: !currentState, complexSearch: !currentState})
    } else {
      this.setState({
        [e.target.id]: e.target.value
      })
    }
  }

  handleSubmit = (e) => {
    e.preventDefault()
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
      <div className="pa4 db">
        <h3 id="houseSearchTitle">Houses for Haunt</h3>
        <div className="pv2"><h2 className="dib">Sales</h2></div>
        <form style={styles.form} className="w-100 ma0 flex items-start"onSubmit={this.handleSubmit}>
          <input id="typedSearch" className="f4 w-100 mr4" style={styles.typedSearch} onChange={this.handleChange} placeholder="House or building name"/><br></br>
          <input id="solo_haunt" type="checkbox" value={this.state.solo_haunt} onChange={this.handleChange}/><h3>Solo Haunt</h3>
          <input id="burial_ground" type="checkbox" value={this.state.burial_ground} onChange={this.handleChange}/><h3>Built on top of Burial Ground</h3>
          <input id="new_family" type="checkbox" value={this.state.new_family} onChange={this.handleChange}/><h3>New Family Hoping for a Fresh Start</h3>
          <input id="witch_friendly" type="checkbox" value={this.state.witch_friendly} onChange={this.handleChange}/><h3>Witch Friendly</h3>
          <button style={styles.searchButton} className="f6 link dim ph3 pv2 mb2 dib white bg-black pointer" id="houseSearchSubmit" type="submit">Search</button>
        </form>
      </div>
    )
  }
}


export default connect(null, {searchProperties, searchSite})(withRouter(HouseSearchForm))
