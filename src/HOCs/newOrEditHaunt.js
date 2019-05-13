//I have a new haunt link and can have a button to also change the path
//those can be different things
//I want the form to be the same but it will be save or edit
// the local state of the form can be tied to the props from the hoc
//that way it can be used as the value for each field
//and still change and be ready to be posted with the action
//which will also be lifted to the hoc

import React from 'react'
import { connect } from 'react-redux'
import { createHaunt } from '../NewHaunt/NewHauntActions'
import { compose } from 'redux'
import Adapter from '../adapter.js'
import agentWithAuth from './agentWithAuth'
import withCurrentGhost from './withCurrentGhost'

function newOrEditHaunt(WrappedComponent){

  class BaseEdit extends React.Component {

    state={
      name: "",
      address: "",
      image_url: "",
      solo_haunt: false,
      burial_ground: false,
      description: "",
      new_family: false,
      rooms: 0,
      newHaunt: false,
      images: []
    }

    componentDidMount(){
      window.scrollTo(0, 0)
      if(this.props.match.params.id){
        Adapter.fetchHouse(parseInt(this.props.match.params.id))
        .then(r=>r.json())
        .then(json=>{
          this.setState({...json.house})
        })
      } else {
        this.setState({
          newHaunt: true
        })
      }
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

    createFormData = (state) => {
      const formData = new FormData()
      for(let key in state){
        if(key==="images"){
          for(let image of state[key]){
            formData.append('house[images][]', image)
          }
        } else {
          formData.append(`house[${key}]`, state[key])
        }
      }
      return formData
    }

    handleSubmit = (e) => {
      e.preventDefault()
      let formData = this.createFormData(this.state)
      if(this.state.newHaunt){
        // this.props.createHaunt(this.state)
        this.props.createHaunt(formData)
      } else {
        formData.append('id', parseInt(this.props.match.params.id))
        Adapter.editHaunt(formData)
      }
    }

    handleFile = (e) => {
      let currentImages = this.state.images
      this.setState({
        images: [...currentImages, e.target.files[0]]
      })
    }

    render(){
      console.log(this.state.images);
      return (
        <WrappedComponent
          {...this.props}
          {...this.state}
          handleChange={this.handleChange}
          handleChecked={this.handleChecked}
          handleSubmit={this.handleSubmit}
          handleFile={this.handleFile}
        />
      )
    }
  }

  return compose(
    withCurrentGhost,
    agentWithAuth,
    connect(null, {createHaunt})
  )(BaseEdit)
  // return withCurrentGhost(agentWithAuth(connect(null)(BaseEdit))

}


export default newOrEditHaunt
