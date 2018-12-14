let apiUrl = "http://localhost:3000/api/v1"

export function fetchFeaturedHouses(){
  return (dispatch) => {
    fetch(`${apiUrl}/featured`)
    .then(res=>res.json())
    .then(json=>{
      dispatch(addFeaturedHouses(json.data))
    })
  }
}

export function addFeaturedHouses(houses){
  return {
    type: "ADD_FEATURED_HOUSES",
    payload: houses
  }
}
