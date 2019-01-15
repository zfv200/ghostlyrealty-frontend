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
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(searchObj)
    }).then(res=>res.json())
      .then(json=>{
        let payload = json.data.map(house=>house.attributes)
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
