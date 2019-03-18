let apiUrl = "http://localhost:3000/api/v1"

export function createHaunt(houseInfo){
  return (dispatch) => {
    fetch(`${apiUrl}/houses`, {
      method: "POST",
      headers: {
        "Content-Type":'application/json',
        "Accept":'application/json',
        Authorization: `Bearer ${localStorage.getItem('jwt')}`
      },
      body: JSON.stringify({
        house: houseInfo
      })
    }).then(r=>r.json())
    .then(json=>{

      console.log(json);
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
