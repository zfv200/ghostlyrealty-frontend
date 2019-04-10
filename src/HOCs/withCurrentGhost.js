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

  const mapStateToProps = (state) => {
    return {
      currentUser: state.userReducer.currentUser
    }
  }

  return connect(mapStateToProps, { fetchCurrentGhost })(baseWithCurrentGhost)
}

export default withCurrentGhost
