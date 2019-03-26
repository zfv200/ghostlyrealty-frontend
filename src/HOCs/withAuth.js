import React from 'react'
import { connect } from 'react-redux'

function withAuth(WrappedComponent){

  const baseAuth = (props) => {
    return (
      props.currentUser &&
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
