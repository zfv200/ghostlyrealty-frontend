import Adapter from '../adapter.js'

export function fetchFeaturedHouses(){
  return (dispatch) => {
    Adapter.fetchFeaturedHouses()
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
    Adapter.fetchFeaturedAgent()
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
    Adapter.fetchCurrentGhost()
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
