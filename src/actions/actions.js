let apiUrl = "http://localhost:3000/api/v1"


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

export function registerGhost(username, password, medium, close){
  return (dispatch) => {
    fetch(`${apiUrl}/register`, {
      method: 'post',
      headers: {
        'Content-Type':'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify({ghost: {username: username, password: password}, medium: medium})
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

export function recentSearch(searchProps){
  return (dispatch) => {
    fetch(`${apiUrl}/recent_search`, {
    method: 'post',
    headers: {
      'Content-Type':'application/json',
      Accept: 'application/json',
      Authorization: `Bearer ${localStorage.getItem('jwt')}`
    },
    body: JSON.stringify(searchProps)
  }).then(r=>r.json())
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
