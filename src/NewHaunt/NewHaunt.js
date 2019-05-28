import React from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { createHaunt } from './NewHauntActions'
import agentWithAuth from '../HOCs/agentWithAuth'
import withCurrentGhost from '../HOCs/withCurrentGhost'
import newOrEditHaunt from '../HOCs/newOrEditHaunt'
import HouseImageButton from './HouseImageButton'
import styles from './NewHaunt.css.js'

import { Segment, Button, Divider, Form, Grid, Image } from 'semantic-ui-react'

class NewHaunt extends React.Component{

  // state={
  //   images: this.props.editImages.map((image, idx)=>idx)
  // }

  createText = (newHaunt) => {
    if(newHaunt){
      return {title: "Add a new haunt!", button: "Create haunt"}
    } else {
      return {title: "Edit your haunt!", button: "Edit haunt"}
    }
  }

  displayImages = () => {
    if(this.props.editImages){
      return (
        <div style={{display: "flex"}}>
          {this.props.editImages.map((image, idx)=>{
            return (
              <HouseImageButton idx={idx} handleImageClick={this.props.handleImageClick} image={image}/>
            )
          })}
        </div>
      )
    }
  }

  displayImagePreviews = () => {
    console.log(this.props.images);
    return (
      <div style={{display: "flex"}}>
        {this.props.images.map(image=>{
          let newPreview = URL.createObjectURL(image)
          return (
            <button onClick={()=>this.props.removePreview(image)}>
              <Image src={newPreview} style={{height: "60px", width: "60px"}}/>
            </button>
          )
        })}
      </div>
    )
  }

  fileInputRef = React.createRef();

  render(){
    return (
      <Segment inverted>
        <Grid>
        <Grid.Row centered>
        <Grid.Column width={12}>
          <Form inverted>
            <h1>{this.createText(this.props.newHaunt).title}</h1>
            <Form.Field>
              <Form.Input label='House Name' id="name" value={this.props.name} onChange={this.props.handleChange}/>
            </Form.Field>
            <Form.Field>
              <label>Address:</label>
              <input id="address" value={this.props.address} onChange={this.props.handleChange}/>
            </Form.Field>
            <Form.Field>
              <label>Current Images:</label>
              {this.displayImages()}
              <label>New Image Previews:</label>
              {this.displayImagePreviews()}
              <label>Image URL:</label>
              <Button
              inverted
              content="Choose File"
              labelPosition="left"
              icon="file"
              onClick={(e) => {
                e.stopPropagation()
                this.fileInputRef.current.click()}
              }/>
              <input type="file" ref={this.fileInputRef} hidden value={this.props.image} onChange={this.props.handleFile}/>
            </Form.Field>
            <Form.Field>
              <Form.Checkbox id="solo_haunt" label='Solo Haunt'checked={this.props.solo_haunt} value={this.props.solo_haunt} onChange={this.props.handleChecked}/>
            </Form.Field>
            <Form.Field>
              <Form.Checkbox id="burial_ground" label='Burial Ground' checked={this.props.burial_ground} value={this.props.burial_ground} onChange={this.props.handleChecked}/>
            </Form.Field>
            <Form.Field>
              <Form.Checkbox id="new_family" label='Family Searching For a Fresh Start' checked={this.props.new_family} value={this.props.new_family} onChange={this.props.handleChecked}/>
            </Form.Field>
            <Form.Field>
              <label>Haunt Description</label>
              <textarea id="description" value={this.props.description} onChange={this.props.handleChange}></textarea>
            </Form.Field>
            <Button inverted onClick={this.props.handleSubmit} type="button">{this.createText(this.props.newHaunt).button}</Button>
          </Form>
          </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
    )
  }
}

// <input id="image_url" value={this.props.image_url} onChange={this.props.handleChange}/>


export default compose(
  newOrEditHaunt
)(NewHaunt)
