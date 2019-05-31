import React from 'react'

import { Button } from 'semantic-ui-react'
import { NavLink } from 'react-router-dom';


const EditHauntButton = (props) => {

  return (
    <NavLink to={`/houses/${props.id}/edit`}>
      <button className="f6 link dim ph3 pv2 mb2 dib white bg-black pointer w5">
      Edit Haunt
      </button>
    </NavLink>
  )
}

export default EditHauntButton
