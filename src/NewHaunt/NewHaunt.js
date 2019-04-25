import React from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { createHaunt } from './NewHauntActions'
import agentWithAuth from '../HOCs/agentWithAuth'
import withCurrentGhost from '../HOCs/withCurrentGhost'
import newOrEditHaunt from '../HOCs/newOrEditHaunt'
import styles from './NewHaunt.css.js'

class NewHaunt extends React.Component{

  createText = (newHaunt) => {
    if(newHaunt){
      return {title: "Add a new haunt!", button: "Create haunt"}
    } else {
      return {title: "Edit your haunt!", button: "Edit haunt"}
    }
  }

  render(){
    return (
      <div>
        <h1>{this.createText(this.props.newHaunt).title}</h1>
        <form style={styles.newHauntForm} onSubmit={this.props.handleSubmit}>
          <label>House Name:</label>
          <input id="name" value={this.props.name} onChange={this.props.handleChange}/>
          <label>Address:</label>
          <input id="address" value={this.props.address} onChange={this.props.handleChange}/>
          <label>Image URL:</label>
          <input id="image_url" value={this.props.image_url} onChange={this.props.handleChange}/>
          <label>Solo Haunt:</label>
          <input id="solo_haunt" type="checkbox" checked={this.props.solo_haunt} value={this.props.solo_haunt} onChange={this.props.handleChecked}/>
          <label>Burial Ground:</label>
          <input id="burial_ground" type="checkbox" checked={this.props.burial_ground} value={this.props.burial_ground} onChange={this.props.handleChecked}/>
          <button type="submit">{this.createText(this.props.newHaunt).button}</button>
        </form>
      </div>
    )
  }
}

export default compose(
  newOrEditHaunt
)(NewHaunt)
