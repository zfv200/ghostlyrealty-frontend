import React from 'react'
import { connect } from 'react-redux'
import { filterAgents } from './AgentPageActions'

class AgentFilter extends React.Component {
  state={
    input: ""
  }

  handleChange = (e) => {
    this.props.filterAgents(e.target.value)
    this.setState({
      input: e.target.value
    })
  }

  render(){
    return (
      <div className="fl w-50 pa2">
        <h2>Find Your Medium</h2>
        <input value={this.state.input} onChange={this.handleChange}></input>
      </div>
    )
  }
}

export default connect(null, { filterAgents })(AgentFilter)
