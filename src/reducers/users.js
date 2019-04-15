const defaultState = {
  currentUser: null,
  signInError: false,
  currentUserSearches: [],
  signInForm: false,
  registerForm: false,
  currentUserHouses: []
}

export default function userReducer(state=defaultState, action){
  switch(action.type){
    case "SET_CURRENT_GHOST":
      return {...state,
              currentUser: action.payload,
              signInError: false,
              currentUserSearches: action.payload.searches,
              currentUserHouses: action.payload.houses}
    case "SIGN_IN_ERROR":
      return {...state, signInError: true}
    case "LOG_OUT_GHOST":
      return {...state, currentUser: null}
    case "ADD_SEARCH":
      return {...state, currentUserSearches: [...state.currentUserSearches, action.payload]}
    case "CLICK_SIGN_IN":
      return {...state, signInForm: action.payload}
    case "CLICK_REGISTER":
      return {...state, registerForm: action.payload}
    case "HAUNT_HOUSE_ACTION":
      let updatedWithNewHouse = [...state.currentUserHouses, action.payload]
      return {...state, currentUserHouses: updatedWithNewHouse}
    case "LEAVE_HOUSE_ACTION":
      let filteredHouses = state.currentUserHouses.filter(house=>house.id!==action.payload)
      return {...state, currentUserHouses: filteredHouses}
    default:
      return state
  }
}
