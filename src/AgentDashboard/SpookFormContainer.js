import React, { useState } from 'react'

import SpookScoreGenerator from './SpookScoreGenerator'
import Adapter from '../adapter'

import { connect } from 'react-redux'

import withCurrentGhost from '../HOCs/withCurrentGhost'

import { Select } from 'semantic-ui-react'

function SpookFormContainer(props){

  const [selectedId, changeSelectedId] = useState(null)
  const [newSpookScore, addSpookScore] = useState(null)
  const [loading, changeLoadingStatus] = useState(false)
  const [selectedHouseName, changeSelectedHouseName] = useState(null)

  const houseOptions = () => {
    return props.houses.map(house=>{
      return {
        key: house.id,
        text: house.name,
        value: house.id
      }
    })
  }

  const generateSpookScore = () => {
    addSpookScore(null)
    changeLoadingStatus(true)
    if(selectedId){
      let house = props.houses.find(house=>house.id===selectedId).name
      changeSelectedHouseName(house)
      if(props.currentUser.credits > 3){
        Adapter.fetchSpookScore(selectedId)
        .then(json=>{
          changeLoadingStatus(false)
          addSpookScore(json.result)
          props.dispatch({type: "UPDATE_CREDITS", payload: props.currentUser.credits - 3})
        })
      } else {
        alert("please add more credits to receive a spook score!")
      }
    }
  }

  const onChange = (e, data) => {
    changeSelectedId(data.value)
  }

  const displaySpookScore = () => {
    return (
      <div>
        <h1>{`${selectedHouseName}'s Spook Score is ${newSpookScore}! Try adding more photos to raise it!`}</h1>
      </div>
    )
  }

  return (
    <div>
      <h1>Generate a Spook Score to Attract More Ghosts!</h1>
      <Select onChange={onChange} placeholder='Select house' options={houseOptions()}/>
      <SpookScoreGenerator loading={loading} newSpookScore={newSpookScore} generateSpookScore={generateSpookScore} id={selectedId}/>
      {newSpookScore ? displaySpookScore() : null}
    </div>
  )
}

export default connect(null)(withCurrentGhost(SpookFormContainer))
