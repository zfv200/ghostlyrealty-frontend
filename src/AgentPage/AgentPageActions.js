import Adapter from '../adapter.js'

export function fetchAgents(){
  return (dispatch) => {
    Adapter.fetchAgents()
    .then(json=>{
      dispatch(addAgents(json.data))
    })
  }
}

function addAgents(agents){
  return {
    type: "ADD_AGENTS",
    payload: agents
  }
}
