import React from 'react'
import { connect } from 'react-redux'
import { createHaunt } from './NewHauntActions'
import agentWithAuth from '../HOCs/agentWithAuth'
import withCurrentGhost from '../HOCs/withCurrentGhost'
import styles from './NewHaunt.css.js'

class NewHaunt extends React.Component{
  state={
    name: "",
    address: "",
    image_url: "",
    solo_haunt: false,
    burial_ground: false
  }

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }

  handleChecked = (e) => {
    this.setState({
      [e.target.id]: e.target.checked
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    // 
    this.props.createHaunt(this.state)
  }

  render(){
    return (
      <div>
        <h1>Add New Haunt!</h1>
        <form style={styles.newHauntForm} onSubmit={this.handleSubmit}>
          <label>House Name:</label>
          <input id="name" value={this.state.name} onChange={this.handleChange}/>
          <label>Address:</label>
          <input id="address" value={this.state.address} onChange={this.handleChange}/>
          <label>Image URL:</label>
          <input id="image_url" value={this.state.image_url} onChange={this.handleChange}/>
          <label>Solo Haunt:</label>
          <input id="solo_haunt" type="checkbox" value={this.state.solo_haunt} onChange={this.handleChecked}/>
          <label>Burial Ground:</label>
          <input id="burial_ground" type="checkbox" value={this.state.burial_ground} onChange={this.handleChecked}/>
          <button type="submit">Create Haunt</button>
        </form>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    currentUser: state.userReducer.currentUser
  }
}

export default connect(mapStateToProps, {createHaunt})(withCurrentGhost(agentWithAuth(NewHaunt)))
