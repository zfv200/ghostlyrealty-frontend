import React from 'react'
import { connect } from 'react-redux'

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
        <div>
          <button onClick={()=>this.handleClick(true)} className="f6 link dim ba ph3 pv2 mb2 dib black"> {this.props.title} </button>
          {this.state.buttonClick &&
            <WrappedForm handleClick={()=>this.handleClick(false)} {...this.props}/>
          }
        </div>
      )
    }
  }

  return baseLink
}


export default linkButtonWithForm
