const defaultState = {
  agentResults: [],
  houseResults: []
}

export default function searchReducer(state=defaultState, action){
  switch(action.type){
    case "SEARCH_SITE":
      return {...state, agentResults: action.payload}
    default:
      return state
  }
}
