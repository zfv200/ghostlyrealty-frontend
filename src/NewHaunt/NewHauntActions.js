import Adapter from '../adapter.js'

export function createHaunt(houseInfo){
  return (dispatch) => {
    Adapter.createHaunt(houseInfo)
    .then(json=>{
      if(json.error){
        dispatch(sendHauntError())
      }
    })
  }
}

function sendHauntError(){
  return {
    type: "ADD_HAUNT_ERROR",
  }
}