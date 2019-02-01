const defaultState = {
  currentUser: null,
  signInError: false
}

export default function userReducer(state=defaultState, action){
  switch(action.type){
    case "SET_CURRENT_GHOST":
      return {...state, currentUser: action.payload, signInError: false}
    case "SIGN_IN_ERROR":
      return {...state, signInError: true}
    default:
      return state
  }
}
