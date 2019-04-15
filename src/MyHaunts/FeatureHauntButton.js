import React from 'react'
import { featureHaunt } from './MyHauntsActions'
import { connect } from 'react-redux'
import withCurrentGhost from '../HOCs/withCurrentGhost'

class FeatureHauntButton extends React.Component {

  state={
    featured: this.props.featured
  }

  handleClick = () => {
    let newState = !this.state.featured
    this.props.featureHaunt(this.props.id, newState)
    if(newState === false || this.props.currentUser.credits >= 1){
      this.setState({
        featured: newState
      })
    }
  }

  render(){
    return (
      <button className="f6 link dim ph3 pv2 mb2 dib white bg-black pointer w5" onClick={this.handleClick}>
      {this.state.featured ? "Un-feature Property" : "Feature Property"}
      </button>
    )
  }
}

export default connect(null, { featureHaunt })(withCurrentGhost(FeatureHauntButton))
