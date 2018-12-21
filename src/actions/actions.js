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
