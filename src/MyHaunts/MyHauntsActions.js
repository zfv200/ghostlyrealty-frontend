import Adapter from '../adapter.js'

export const featureHaunt = (id, boolean) => {
  return (dispatch) => {
    Adapter.featureHaunt(id, boolean)
    .then(json=>{
      if(json.error){
        alert("sorry, no more credits!")
        console.log(json.error)
        return "fail"
      }
      let haunt = json.house
      let id = parseInt(json.house.id)
      if(boolean){
        dispatch(featureHauntAction(haunt))
      } else {
        dispatch(unfeatureHauntAction(id))
      }
    }).catch(e=>console.log(e))
  }
}

const featureHauntAction = (haunt) => {
  return {
    type: "FEATURE_HAUNT",
    payload: haunt
  }
}

const unfeatureHauntAction = (id) => {
  return {
    type: "UNFEATURE_HAUNT",
    payload: id
  }
}
