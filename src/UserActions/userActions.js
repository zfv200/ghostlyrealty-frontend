import Adapter from '../adapter.js'

export function hauntHouse(ghostId, houseId){
  return (dispatch) => {
    Adapter.createOrDestroyHaunt(ghostId, houseId, "create")
    .then(json=>{
      let payload = json.house
      dispatch(hauntHouseAction(payload))
    })
  }
}

export function leaveHouse(ghostId, houseId){
  return (dispatch) => {
    Adapter.createOrDestroyHaunt(ghostId, houseId, "destroy")
    .then(json=>{
      let payload = json.id
      dispatch(leaveHouseAction(payload))
    })
  }
}

const hauntHouseAction = (house) => {
  return {
    type: "HAUNT_HOUSE_ACTION",
    payload: house
  }
}

const leaveHouseAction = (id) => {
  return {
    type: "LEAVE_HOUSE_ACTION",
    payload: id
  }
}
