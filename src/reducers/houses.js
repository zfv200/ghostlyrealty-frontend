const defaultState = {
  featuredHouses: []
}

export default function houseReducer(state=defaultState, action){
  switch(action.type){
    case "ADD_FEATURED_HOUSES":
      return {...state, featuredHouses: action.payload}
    default:
      return state
  }
}
