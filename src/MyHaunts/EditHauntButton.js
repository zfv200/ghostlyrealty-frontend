import React from 'react'

import { Button } from 'semantic-ui-react'
import { NavLink } from 'react-router-dom';


const EditHauntButton = (props) => {

  return (
    <NavLink to={`/houses/${props.id}/edit`}>
      <Button style={{height: '55px'}} basic color='black'>
      Edit Haunt
      </Button>
    </NavLink>
  )
}

export default EditHauntButton
