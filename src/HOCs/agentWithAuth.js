import React from 'react'
import { connect } from 'react-redux'

function agentWithAuth(WrappedComponent){

  const baseAuth = (props) => {
    return (
      !!props.isAgent &&
      <WrappedComponent {...props}/>
    )
  }

  const mapStateToProps = (state) => {
    if(state.userReducer.currentUser){
      return {
        isAgent: state.userReducer.currentUser.roles.find(role=>role.name==="agent")
      }
    } else {
      return {}
    }
  }

  return connect(mapStateToProps, {})(baseAuth)
}

export default agentWithAuth
