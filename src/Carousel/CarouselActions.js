
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
