let apiUrl = "http://localhost:3000/api/v1"

export function fetchFeaturedHouses(){
  return (dispatch) => {
    fetch(`${apiUrl}/featured`)
    .then(res=>res.json())
    .then(json=>{
      let payload = json.data.map(house=>house.attributes)
      dispatch(addFeaturedHouses(payload))
    })
  }
}

export function addFeaturedHouses(houses){
  return {
    type: "ADD_FEATURED_HOUSES",
    payload: houses
  }
}

export function fetchFeaturedAgent(){
  return (dispatch) => {
    fetch(`${apiUrl}/featuredagent`)
    .then(r=>r.json())
    .then(json=>{
      dispatch(addFeaturedAgent(json.data))
    })
  }
}

function addFeaturedAgent(data){
  return {
    type: "ADD_FEATURED_AGENT",
    payload: data
  }
}

export function fetchCurrentGhost(){
  return (dispatch) => {
    dispatch(authenticatingGhost())
    fetch(`${apiUrl}/profile`, {
      method: 'get',
      headers: {
        Authorization: `Bearer ${localStorage.getItem('jwt')}`
      }
    })
      .then(response=>response.json())
      .then(({ ghost }) => {
        if (ghost){
          dispatch(setCurrentGhost(ghost))
        }
      })
  }
}

export function authenticatingGhost(){
  return {
    type: "AUTHENTICATING_GHOST"
  }
}

export function setCurrentGhost(ghostData){
  return {
    type: 'SET_CURRENT_GHOST',
    payload: ghostData
  }
}
