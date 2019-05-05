import React from 'react'
import { connect } from 'react-redux'

import { Menu } from 'semantic-ui-react'

function linkButtonWithForm(WrappedForm){

  class baseLink extends React.Component {

    state={
      buttonClick: false
    }

    handleClick = (bool) => {
      this.setState({
        buttonClick: bool
      })
    }

    render(){
      return (
        <Menu.Item>
          <button onClick={()=>this.handleClick(true)} className="f6 link dim ba ph3 pv2 mb2 dib black"> {this.props.title} </button>
          {this.state.buttonClick &&
            <WrappedForm handleClick={()=>this.handleClick(false)} {...this.props}/>
          }
        </Menu.Item>
      )
    }
  }

  return baseLink
}


export default linkButtonWithForm
