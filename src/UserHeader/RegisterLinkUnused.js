import React from 'react'
import Popup from 'reactjs-popup'
import withAuth from '../HOCs/withAuth'
import RegisterForm from './RegisterForm'
import { connect } from 'react-redux'
import { registerButtonClick } from './userHeaderActions.js'
import '../SignInLink.css'
import linkButtonWithForm from '../HOCs/linkButtonWithForm'

// class RegisterLink extends React.Component {
//
//
//   render(){
//     console.log(this.props);
//     return (
//       {this.state.registerButtonClick &&
//         <RegisterForm handleClick={()=>this.handleClick(false)}/>
//       }
//       </div>
//     )
//   }
// }


// export default withAuth(RegisterLink, false)
