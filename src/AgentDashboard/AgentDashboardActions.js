import Adapter from '../adapter'

export function featureMedium(id){
  return (dispatch) => {
    Adapter.featureMedium(id)
    .then(json=>{
      dispatch(featureMediumAction(json.ghost))
    })
  }
}

const featureMediumAction = (ghost) => {
  return {
    type: "FEATURE_AGENT",
    payload: ghost
  }
}
