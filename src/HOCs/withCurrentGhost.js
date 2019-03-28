import React from 'react'
import { connect } from 'react-redux'
import { fetchCurrentGhost } from '../HomePage/HomePageActions'

function withCurrentGhost(WrappedComponent){

  class baseWithCurrentGhost extends React.Component{

    componentDidMount(){
      this.props.fetchCurrentGhost()
    }

    render(){
      return (
        <WrappedComponent {...this.props}/>
      )
    }
  }

  return connect(null, { fetchCurrentGhost })(baseWithCurrentGhost)
}

export default withCurrentGhost
