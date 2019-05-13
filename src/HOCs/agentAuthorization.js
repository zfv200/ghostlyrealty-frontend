import React from 'react'
import { connect } from 'react-redux'

function agentAuthorization(WrappedComponent){

  const baseAuth = (props) => {
    if(props.match && props.currentUser){
      if (parseInt(props.match.params.id) !== props.currentUser.id){
        return null
      } else {
        return (
          <WrappedComponent />
        )
      }
    }
  }

  const mapStateToProps = (state) => {
    return {
      currentUser: state.userReducer.currentUser
    }
  }

  return connect(mapStateToProps, {})(baseAuth)
}

export default agentAuthorization
