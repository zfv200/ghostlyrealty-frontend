import React from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'

import agentWithAuth from '../HOCs/agentWithAuth'
import withCurrentGhost from '../HOCs/withCurrentGhost'
import agentAuthorization from '../HOCs/agentAuthorization'


import { Segment, Button, Divider, Form, Grid } from 'semantic-ui-react'

class EditAgent extends React.Component {

  state={
    username: "",
    profile_picture: ""
  }

  fileInputRef = React.createRef();

  handleFile = () => {
    console.log("hi!");
  }

  render(){
    console.log("hi!");
    return (
      <Segment inverted>
        <Grid>
        <Grid.Row centered>
        <Grid.Column width={12}>
          <Form inverted>
            <h1>Edit Your Profile</h1>
            <Form.Field>
              <Form.Input label='Username' id="username" value={this.state.username} onChange={this.handleChange}/>
            </Form.Field>
            <Form.Field>
              <label>Profile Picture</label>
              <Button
              inverted
              content="Choose File"
              labelPosition="left"
              icon="file"
              onClick={(e) => {
                e.stopPropagation()
                this.fileInputRef.current.click()}
              }/>
              <input type="file" ref={this.fileInputRef} hidden value={this.state.profile_picture} onChange={this.handleFile}/>
            </Form.Field>
            <Form.Field>
              <label>Motto</label>
              <textarea id="motto" value={this.state.motto} onChange={this.handleChange}></textarea>
            </Form.Field>
            <Button inverted onClick={this.handleSubmit} type="button">Update Profile Information</Button>
          </Form>
          </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
    )
  }
}

export default withCurrentGhost(agentWithAuth(agentAuthorization(EditAgent)))
