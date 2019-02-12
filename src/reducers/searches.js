const defaultState = {
  agentResults: [],
  houseResults: [],
  blankSearch: false
}
// TODO: fix it so this clears out no matter which area you're searching

export default function searchReducer(state=defaultState, action){
  switch(action.type){
    case "SEARCH_SITE":
      localStorage.setItem('houseResults', JSON.stringify(action.payload.houses))
      localStorage.setItem('agentResults', JSON.stringify(action.payload.agents))
      return {...state, agentResults: action.payload.agents, houseResults: action.payload.houses}
    case "SEARCH_PROPERTIES":
      localStorage.setItem('houseResults', JSON.stringify(action.payload))
      return {...state, houseResults: action.payload}
    case "ADD_BLANK_SEARCH_ERROR":
      return {...state, blankSearch: action.payload}
    case "CLEAR_BLANK_SEARCH_ERROR":
      return {...state, blankSearch: action.payload}
    default:
      return state
  }
}
