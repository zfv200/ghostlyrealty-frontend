import React from 'react'
import GhostSpinner from '../components/GhostSpinner'

function withLoader(WrappedComponent, arrayOfFetches){

  return class extends React.Component{

    state={
      loaded: true
    }

    componentDidMount(){
      //putting this component on hold
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
