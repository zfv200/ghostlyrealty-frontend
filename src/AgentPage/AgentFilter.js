import React from 'react'
import { connect } from 'react-redux'
import { filterAgents } from './AgentPageActions'

class AgentFilter extends React.Component {
  state={
    input: "",
    style: {position: "relative"}
  }

  componentDidMount(){
    window.addEventListener('scroll', this.handleScroll)
  }

  componentWillUnmount(){
    window.removeEventListener('scroll', this.handleScroll)
  }

  handleScroll = (e) => {
    if(window.scrollY > 125){
      this.setState({
        style: {position: "fixed", top: "130px", zIndex: 1000, width: "25%"}
      })
    } else {
      this.setState({
        style: {position: "relative"}
      })
    }
  }

  handleChange = (e) => {
    this.props.filterAgents(e.target.value)
    this.setState({
      input: e.target.value
    })
  }

  render(){
    return (
      <div className="fl a2 h5 w-25" style={this.state.style}>
        <h2>Find Your Medium</h2>
        <input value={this.state.input} onChange={this.handleChange}></input>
      </div>
    )
  }
}

export default connect(null, { filterAgents })(AgentFilter)
