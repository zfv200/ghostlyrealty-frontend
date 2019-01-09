// TODO: hook featuredagent up to backend, have this populated when the homepage mounts
//it's going to be hardcoded for now until I add agent functionality

const defaultState = {
  featuredAgent: {
    name: 'King Hamlet',
    motto: "Lend thy serious hearing--for your next move!",
    image: "https://i.ytimg.com/vi/IBQucj2hea4/hqdefault.jpg"
  }
}

export default function agentReducer(state=defaultState, action){
  switch(action.type){
    default:
      return state
  }
}
