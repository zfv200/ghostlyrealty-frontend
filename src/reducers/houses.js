export const defaultState = {
  featuredHouses: [],
  featuredHouseIndex: 0,
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
    case "SET_CAROUSEL_INDEX_ON_REFRESH":
      return {...state, featuredHouseIndex: action.payload}
    case "ADD_FEATURED_HOUSES":
      return {...state, featuredHouses: action.payload}
    case "CHANGE_CAROUSEL_TILE_FORWARD":
      let newForwardIndex = changeIndexForward(state.featuredHouseIndex, state.featuredHouses.length)
      localStorage.setItem('carouselIndex', newForwardIndex)
      return {...state, featuredHouseIndex: newForwardIndex}
    case "CHANGE_CAROUSEL_TILE_BACK":
      let newBackIndex = changeIndexBackward(state.featuredHouseIndex, state.featuredHouses.length)
      localStorage.setItem('carouselIndex', newBackIndex)
      return {...state, featuredHouseIndex: newBackIndex}
    case "FEATURE_HAUNT":
      let newFeatures = [...state.featuredHouses, action.payload]
      return {...state, featuredHouses: newFeatures, featuredHouseIndex: 0}
    case "UNFEATURE_HAUNT":
      let filteredFeatures = state.featuredHouses.filter(house=>house.id!==action.payload)
      return {...state, featuredHouses: filteredFeatures, featuredHouseIndex: 0}
    default:
      return state
  }
}
