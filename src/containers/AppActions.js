export const toggleMenu = (e, currentVal) => {
  e.stopPropagation()
  return (dispatch) =>{
    if (e.target.id !== "nav-search-bar") {
      dispatch(toggleMenuAction(!currentVal))
    }
  }
}

const toggleMenuAction = (payload) => {
  return {
    payload: payload,
    type: 'TOGGLE_MENU'
  }
}
