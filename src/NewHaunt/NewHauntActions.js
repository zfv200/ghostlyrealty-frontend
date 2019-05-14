import Adapter from '../adapter.js'

export function createHaunt(formData){
  return (dispatch) => {
    return Adapter.createHaunt(formData)
    .then(json=>{
      if(json.error){
        dispatch(sendHauntError())
      } else {
        return json.house.id
      }
    })
  }
}

function sendHauntError(){
  return {
    type: "ADD_HAUNT_ERROR",
  }
}
