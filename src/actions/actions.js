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

export function changeCarousel(direction){
  return (dispatch) => {
    dispatch(changeCarouselTile(direction))
  }
}

export function changeCarouselTile(direction){
  if (direction==="foward"){
    return {
      type: "CHANGE_CAROUSEL_TILE_FORWARD",
    }
  } else {
    return {
      type: "CHANGE_CAROUSEL_TILE_BACK"
    }
  }
}

export function addFeaturedHouses(houses){
  return {
    type: "ADD_FEATURED_HOUSES",
    payload: houses
  }
}

export function searchSite(searchTerm){
  return (dispatch) => {
    fetch(`${apiUrl}/search`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('jwt')}`,
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        searchTerm: searchTerm
      })
    }).then(res=>res.json())
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

export function searchProperties(searchObj){
  return (dispatch) => {
    fetch(`${apiUrl}/search_properties`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('jwt')}`,
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        search: searchObj
      })
    }).then(res=>res.json())
      .then(json=>{
        let payload = json.results
        dispatch(searchPropertiesAction(payload))
        if (json.search){
          dispatch(addSearch(json.search))
        }
      })
  }
}

export function addSearch(search){
  return {
    type: "ADD_SEARCH",
    payload: search
  }
}

export function searchPropertiesAction(results){
  return {
    type: "SEARCH_PROPERTIES",
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

export function loginGhost(username, password, close){
  return (dispatch) => {
    // TODO: make this actually do something while it's happening
    dispatch(authenticatingGhost())
    fetch(`${apiUrl}/login`, {
      method: 'post',
      headers: {
        'Content-Type':'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify({ghost: {
        username: username,
        password: password
      }})
    }).then(response=>{
      if (response.ok){
        close()
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

export function registerGhost(username, password, close){
  return (dispatch) => {
    fetch(`${apiUrl}/register`, {
      method: 'post',
      headers: {
        'Content-Type':'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify({ghost: {username: username, password: password}})
    }).then(response=>{
      if (response.ok){
        close()
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
