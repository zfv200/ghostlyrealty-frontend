const defaultState = {
  currentUser: null,
  signInError: false,
  currentUserSearches: []
}

export default function userReducer(state=defaultState, action){
  switch(action.type){
    case "SET_CURRENT_GHOST":
      return {...state, currentUser: action.payload, signInError: false, currentUserSearches: action.payload.searches}
    case "SIGN_IN_ERROR":
      return {...state, signInError: true}
    case "LOG_OUT_GHOST":
      return {...state, currentUser: null}
    case "ADD_SEARCH":
      return {...state, currentUserSearches: [...state.currentUserSearches, action.payload]}
    default:
      return state
  }
}
