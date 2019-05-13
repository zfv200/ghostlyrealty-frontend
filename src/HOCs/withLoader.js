import React from 'react'
import GhostSpinner from '../components/GhostSpinner'

function withLoader(WrappedComponent, arrayOfFetches){

  return class extends React.Component{

    state={
      loaded: false
    }

    componentDidMount(){
      console.log("hi!");
    }

    render(){
      return (
        this.state.loaded ?
          <WrappedComponent {...this.props}/>
          :
          <GhostSpinner />
      )
    }
  }
}

export default withLoader
