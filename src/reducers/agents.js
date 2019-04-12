// TODO: hook featuredagent up to backend, have this populated when the homepage mounts
//it's going to be hardcoded for now until I add agent functionality

// TODO: set it up so that agents are actual models with that kind of user relationship. agents is also hardcoded for display purposes

export const defaultState = {
  featuredAgent: null,
  agents: [],
  allAgents: []
}

const filterAgents = (searchTerm, state) => {
  return state.allAgents.filter(agent=>agent.username.toLowerCase().includes(searchTerm.toLowerCase()))
}

export default function agentReducer(state=defaultState, action){
  switch(action.type){
    case "ADD_FEATURED_AGENT":
      return {...state, featuredAgent: action.payload}
    case "ADD_AGENTS":
      return {...state, agents: action.payload, allAgents: action.payload}
    case "FILTER_AGENTS":
      return {...state, agents: filterAgents(action.payload, state)}
    default:
      return state
  }
}
