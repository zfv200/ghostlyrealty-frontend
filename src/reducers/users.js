const defaultState = {
  currentUser: "casper",
  userId: "1",
  loggedIn: true
}

export default function userReducer(state=defaultState, action){
  switch(action.type){
    default:
      return state
  }
}
