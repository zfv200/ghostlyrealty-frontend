import React from 'react'
import { connect } from 'react-redux'

function withAuth(WrappedComponent, boolean){

  const baseAuth = (props) => {
    return (
      //abstracted to render or not based on if user is logged in or not
      !!props.currentUser === boolean &&
      <WrappedComponent {...props}/>
    )
  }

  const mapStateToProps = (state) => {
    return {
      currentUser: state.userReducer.currentUser
    }
  }
  return connect(mapStateToProps, {})(baseAuth)
}


export default withAuth
