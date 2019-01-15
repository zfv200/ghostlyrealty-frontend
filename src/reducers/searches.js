const defaultState = {
  agentResults: [],
  houseResults: [],
}
// TODO: fix it so this clears out no matter which area you're searching

export default function searchReducer(state=defaultState, action){
  switch(action.type){
    case "SEARCH_SITE":
      return {...state, agentResults: action.payload.agents, houseResults: action.payload.houses}
    case "SEARCH_PROPERTIES":
      return {...state, houseResults: action.payload}
    default:
      return state
  }
}
