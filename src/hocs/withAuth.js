// import React from 'react'
// import { connect } from 'react-redux'
// import { Redirect } from 'react-router'
// import * as actions from '../actions'
// // use a loader from semantic-ui-react ?
// const withAuth = (WrappedComponent) => {
//   class AuthorizedComponent extends React.Component{
//     componentDidMount(){
//       // TODO: make tokens expire
//       if (localStorage.getItem('jwt') && !this.props.loggedIn) this.props.fetchCurrentGhost()
//     }
//
//     render(){
//       if (localStorage.getItem('jwt') && this.props.loggedIn) {
//         return <WrappedComponent />
//       } else if (localStorage.getItem('jwt') && this.props.authenticatingUser){
//         return <h1>"hi"</h1>
//       } else {
//         return <Redirect to="/" />
//       }
//     }
//   }
//   return connect(mapStateToProps, actions)(AuthorizedComponent)
// }
//
// const mapStateToProps = (state) => {
//   return {
//     loggedIn: state.userReducer.loggedIn,
//     authenticatingUser: state.userReducer.authenticatingUser
//   }
// }
//
// export default withAuth
