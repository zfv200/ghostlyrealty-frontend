import houseReducer from './houses'
import {changeIndexForward, changeIndexBackward} from './houses'

const featuredHouses = {
  type: "ADD_FEATURED_HOUSES",
  payload: [
    {
      name: "Winchester Mystery House", address: null, featured: true
    }
  ]
}

const changeForward = {
  type: "CHANGE_CAROUSEL_TILE_FORWARD"
}

describe('houseReducer', ()=>{
  it('returns the initial state', ()=>{
    expect(houseReducer(undefined, {})).toEqual(
      {featuredHouses: Array(0), featuredHouseIndex: 0}
    )
  })

  it('adds featured houses', ()=>{
    expect(houseReducer(undefined, featuredHouses)).toEqual(
      {featuredHouses: featuredHouses.payload, featuredHouseIndex: 0}
    )
  })

  it('changes the carousel tile forward', ()=>{
    expect(houseReducer(undefined, changeForward)).toEqual(
      {"featuredHouseIndex": 1, "featuredHouses": []}
    )
  })
})

describe('changeIndexForward', ()=>{
  it('changes index forward when at the end', ()=>{
    expect(changeIndexForward(4, 5)).toEqual(0)
  })
  it('changes index forward when not at the end', ()=>{
    expect(changeIndexForward(0, 5)).toEqual(1)
  })
})

describe('changeIndexBackward', ()=>{
  it('changes index backward when at the beginning', ()=>{
    expect(changeIndexBackward(0, 5)).toEqual(4)
  })
  it('changes index backward when not at the beginning', ()=>{
    expect(changeIndexBackward(3, 5)).toEqual(2)
  })
})
