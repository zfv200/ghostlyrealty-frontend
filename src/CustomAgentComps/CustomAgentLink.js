import React from 'react'
import { NavLink } from 'react-router-dom';
import styles from '../NavBar/NavBar.css.js'
import agentWithAuth from '../HOCs/agentWithAuth'

import { Menu } from 'semantic-ui-react'


const CustomAgentLink = (props) => {
  return (
    <Menu.Item>
      <NavLink onClick={props.onClick} className="nav-link" to={props.path}>{props.text}</NavLink>
    </Menu.Item>
  )
}

export default agentWithAuth(CustomAgentLink)
