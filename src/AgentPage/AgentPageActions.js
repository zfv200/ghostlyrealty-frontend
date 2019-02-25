let apiUrl = "http://localhost:3000/api/v1"

export function fetchAgents(){
  return (dispatch) => {
    fetch(`${apiUrl}/ghosts`, {
      headers: {
        type: "agents"
      }
    }).then(r=>r.json())
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
