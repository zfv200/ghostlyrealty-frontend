import React from 'react'
import Adapter from '../adapter'

class SpookScoreGenerator extends React.Component{

  generateSpookScore = () => {
    Adapter.fetchSpookScore(this.props.id)
    .then(json=>{
      let classes = json.result.images[0].classifiers[0].classes
      return classes.length ? console.log(classes[0].score) : console.log("Image not clear enough!")
    })
  }

  render(){
    return(
      <div>
        <button onClick={this.generateSpookScore}>Generate Spook Score!</button>
      </div>
    )
  }
}

export default SpookScoreGenerator
