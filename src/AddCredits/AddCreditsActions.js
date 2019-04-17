import Adapter from '../adapter.js'

export function addCredits(credits, id){
  return (dispatch) => {
    Adapter.addCredits(credits, id)
    .then(json=>{
      dispatch(updateCredits(json.ghost.credits))
    })
  }
}

const updateCredits = (credits) => {
  return {
    type: "UPDATE_CREDITS",
    payload: credits
  }
}
