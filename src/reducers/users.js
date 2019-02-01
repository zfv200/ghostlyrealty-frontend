const defaultState = {
  currentUser: null
}

export default function userReducer(state=defaultState, action){
  switch(action.type){
    case "SET_CURRENT_GHOST":
      return {...state, currentUser: action.payload}
    default:
      return state
  }
}
