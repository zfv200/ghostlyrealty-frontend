import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { searchProperties, searchSite } from './HouseSearchActions'
import styles from './HouseSearchForm.css.js'

import { Form, Button, Segment, Divider } from 'semantic-ui-react'

class HouseSearchForm extends React.Component{

  constructor(){
    super()

    this.state={
      typedSearch: '',
      solo_haunt: false,
      burial_ground: false,
      complexSearch: false,
      new_family: false,
      witch_friendly: false,
      exact_search: false
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
      <div>
        <h3 id="houseSearchTitle">Houses for Haunt</h3>
        <Segment inverted>
          <Form inverted onSubmit={this.handleSubmit}>
            <Form.Input id="typedSearch" onChange={this.handleChange} placeholder='House or building name'/>
            <Form.Group widths='equal'>
              <Form.Checkbox label='Solo Haunt' id="solo_haunt" value={this.state.solo_haunt} onChange={this.handleChange}/>
              <Form.Checkbox label='Built on top of Burial Ground' id="burial_ground" value={this.state.burial_ground} onChange={this.handleChange}/>
              <Form.Checkbox label='New Family Hoping for a Fresh Start' id="new_family" type="checkbox" value={this.state.new_family} onChange={this.handleChange}/>
              <Form.Checkbox label='Witch Friendly' id="witch_friendly" type="checkbox" value={this.state.witch_friendly} onChange={this.handleChange}/>
              <Form.Checkbox label='Exact Search' id="exact_search" type="checkbox" value={this.state.exact_search} onChange={this.handleChange}/>
            </Form.Group>
            <Button inverted id="houseSearchSubmit" type="submit">Search</Button>
          </Form>
        </Segment>
        <Divider />
      </div>
    )
  }
}


export default connect(null, {searchProperties, searchSite})(withRouter(HouseSearchForm))
