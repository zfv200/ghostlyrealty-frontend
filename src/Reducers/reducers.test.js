import houseReducer from './houses'
import changeIndexForward from './houses'
import changeIndexBackward from './houses'

const featuredHouses = {
  type: "ADD_FEATURED_HOUSES",
  payload: [
    {
      name: "Winchester Mystery House", address: null, featured: true
    }
  ]
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

  // it('changes the carousel tile forward', ()=>{
  //   expect(houseReducer(undefined, ))
  // })
})

describe('changeIndexForward', ()=>{
  it('changes index forward when at the end', ()=>{
    expect(changeIndexForward(4, 5)).toEqual(0)
  })
  it('changes index forward when not at the end', ()=>{
    expect(changeIndexForward(0, 5)).toEqual(1)
  })
})
