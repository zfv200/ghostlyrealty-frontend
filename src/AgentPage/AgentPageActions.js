import Adapter from '../adapter.js'

export function fetchAgents(){
  return (dispatch) => {
    Adapter.fetchAgents()
    .then(json=>{
      dispatch(addAgents(json.data))
    })
  }
}

export function filterAgents(searchTerm){
  return (dispatch) => {
    dispatch(filterAgentsAction(searchTerm))
  }
}

function filterAgentsAction(searchTerm){
  return {
    type: "FILTER_AGENTS",
    payload: searchTerm
  }
}

function addAgents(agents){
  return {
    type: "ADD_AGENTS",
    payload: agents
  }
}
