import Adapter from '../adapter.js'

export function fetchFeaturedHouses(){
  return (dispatch) => {
    Adapter.fetchFeaturedHouses()
    .then(json=>{
      let payload = json.houses
      dispatch(addFeaturedHouses(payload))
    })
  }
}

export function setCarouselIndexOnRefresh(){
  let index
  if(localStorage.getItem('carouselIndex')){
    index = parseInt(localStorage.getItem('carouselIndex'))
    return {
      type: "SET_CAROUSEL_INDEX_ON_REFRESH",
      payload: index
    }
  } else {
    return {
      type: "DEFAULT_ACTION"
    }
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
      let payload = json.ghost
      dispatch(addFeaturedAgent(payload))
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
