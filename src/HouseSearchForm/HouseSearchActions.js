let apiUrl = "http://localhost:3000/api/v1"


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
        debugger
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
