import Adapter from '../adapter.js'

export function searchProperties(searchObj){
  return (dispatch) => {
    Adapter.searchProperties(searchObj)
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

export function searchSite(searchTerm){
  return (dispatch) => {
    Adapter.searchSite(searchTerm)
    .then(json=>{
      if (json.agents){
        dispatch(searchSiteAction(json))
      } else {
        dispatch(searchPropertiesAction(json.houses))
      }
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
