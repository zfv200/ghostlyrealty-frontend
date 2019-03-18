import agentReducer from './agents'
import { defaultState } from './agents'

const featuredAgentAction = {
  type: "ADD_FEATURED_AGENT",
  payload: {
    attributes: {
      username: "King Hamlet",
      age: 500,
      image: "https://i.ytimg.com/vi/IBQucj2hea4/hqdefault.jpg"
    }
  }
}

const agentsAction = {
  type: "ADD_AGENTS",
  payload: [
    {
      id: 2,
      type: "ghosts",
      attributes: {
        username: "King Hamlet",
        age: 500,
        image: "https://i.ytimg.com/vi/IBQucj2hea4/hqdefault.jpg",
        motto: "Lend thy serious hearing--for your next move!"
      }
    }
  ]
}

describe('agentReducer', ()=>{
  it('returns the initial state', ()=>{
    expect(agentReducer(defaultState, {})).toEqual(
      defaultState
    )
  })

  it('adds the featured agent', ()=>{
    expect(agentReducer(defaultState, featuredAgentAction)).toEqual(
      {...defaultState, featuredAgent: featuredAgentAction.payload.attributes}
    )
  })

  it('adds all agents from fetch', ()=>{
    expect(agentReducer(defaultState, agentsAction)).toEqual(
      {...defaultState, agents: agentsAction.payload}
    )
  })
})
