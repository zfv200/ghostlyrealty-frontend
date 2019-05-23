import React, { useState } from 'react'

import SpookScoreGenerator from './SpookScoreGenerator'
import Adapter from '../adapter'

import { Select } from 'semantic-ui-react'

function SpookFormContainer(props){

  const [selectedId, changeSelectedId] = useState(null)
  const [newSpookScore, addSpookScore] = useState(null)

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
    if(selectedId){
      Adapter.fetchSpookScore(selectedId)
      .then(json=>{
        addSpookScore(json.result)
      }).catch(err=>{

      })
    }
  }

  const onChange = (e, data) => {
    changeSelectedId(data.value)
  }

  return (
    <div>
      <h1>Generate a Spook Score to Attract More Ghosts!</h1>
      <Select onChange={onChange} placeholder='Select house' options={houseOptions()}/>
      <SpookScoreGenerator generateSpookScore={generateSpookScore} id={selectedId}/>
      {newSpookScore ? <h1>{newSpookScore}</h1> : null}
    </div>
  )
}

export default SpookFormContainer
