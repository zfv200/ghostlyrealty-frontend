import React from 'react'
import Adapter from '../adapter'

import { Button } from 'semantic-ui-react'

class SpookScoreGenerator extends React.Component{

  // generateSpookScore = () => {
  //   Adapter.fetchSpookScore(this.props.id)
  //   .then(json=>{
  //     debugger
  //     // let classes = json.result.images[0].classifiers[0].classes
  //     // return classes.length ? console.log(classes[0].score) : console.log("Image not clear enough!")
  //   }).catch(err=>{
  //     debugger
  //   })
  // }

  render(){
    return(
      <div>
        <Button onClick={this.props.generateSpookScore}>Generate Spook Score!</Button>
      </div>
    )
  }
}

export default SpookScoreGenerator
