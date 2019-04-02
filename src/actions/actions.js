import Adapter from '../adapter.js'

export function searchSite(searchTerm){
  return (dispatch) => {
    Adapter.searchSite(searchTerm)
    .then(json=>{
      dispatch(searchSiteAction(json))
    })
  }
}

//this is front end results of the fetch from searchSite
export function searchSiteAction(results){
  return {
    type: "SEARCH_SITE",
    payload: results
  }
}

export function addBlankSearchError(){
  return {
    type: "ADD_BLANK_SEARCH_ERROR",
    payload: true
  }
}

export function clearBlankSearchError(){
  return {
    type: "CLEAR_BLANK_SEARCH_ERROR",
    payload: false
  }
}

export function loginGhost(username, password){
  return (dispatch) => {
    // TODO: make this actually do something while it's happening
    dispatch(authenticatingGhost())
    Adapter.logInGhost(username, password)
    .then(response=>{
      if (response.ok){
        return response.json()
      } else {
        dispatch(signInError())
        throw response
      }
    })
    .then(({ ghost, jwt })=>{
      //body
      localStorage.setItem('jwt', jwt)
      dispatch(setCurrentGhost(ghost))
    })
    // TODO:
    // .catch(r => r.json().then(e => dispatch(failedLogin(e.message))))
  }
}

export function registerGhost(username, password, medium){
  return (dispatch) => {
    Adapter.registerGhost(username, password, medium)
    .then(response=>{
      if (response.ok){
        return response.json()
      } else {
        throw response
      }
    })
      .then(({ ghost, jwt })=>{
        localStorage.setItem('jwt', jwt)
        dispatch(setCurrentGhost(ghost))
      })
  }
}

export function recentSearch(searchProps){
  return (dispatch) => {
    Adapter.postRecentSearch(searchProps)
    .then(json=>{
      let payload = json.results
      dispatch(searchPropertiesAction(payload))
    })
  }
}

export function searchPropertiesAction(results){
  return {
    type: "SEARCH_PROPERTIES",
    payload: results
  }
}

export function logOutGhost(){
  return {
    type: 'LOG_OUT_GHOST'
  }
}

export function setCurrentGhost(ghostData){
  return {
    type: 'SET_CURRENT_GHOST',
    payload: ghostData
  }
}

export function signInError(){
  return {
    type: 'SIGN_IN_ERROR'
  }
}

export function authenticatingGhost(){
  return {
    type: "AUTHENTICATING_GHOST"
  }
}
