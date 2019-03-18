export const defaultState = {
  featuredHouses: [],
  featuredHouseIndex: 0
}

export function changeIndexForward(currentIndex, length){
  if (currentIndex===length-1){
    return 0
  } else {
    return ++currentIndex
  }
}

export function changeIndexBackward(currentIndex, length){
  if (currentIndex===0){
    return length - 1
  } else {
    return --currentIndex
  }
}

export default function houseReducer(state=defaultState, action){
  switch(action.type){
    case "ADD_FEATURED_HOUSES":
      return {...state, featuredHouses: action.payload}
    case "CHANGE_CAROUSEL_TILE_FORWARD":
      return {...state, featuredHouseIndex: changeIndexForward(state.featuredHouseIndex, state.featuredHouses.length)}
    case "CHANGE_CAROUSEL_TILE_BACK":
      return {...state, featuredHouseIndex: changeIndexBackward(state.featuredHouseIndex, state.featuredHouses.length)}
    default:
      return state
  }
}
