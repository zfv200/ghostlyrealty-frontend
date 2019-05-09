import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { filterAgents } from './AgentPageActions'

const AgentFilter = (props) => {

  const [input, changeInput] = useState("")
  const [style, changeStyle] = useState({position: "relative"})

  useEffect(()=>{
    window.addEventListener('scroll', handleScroll)

    const removeScroll = () => {
      window.removeEventListener('scroll', handleScroll)
    }

    return removeScroll
  })

  const handleScroll = (e) => {
    if(window.scrollY > 110){
      console.log(style);
      changeStyle(
        {position: "fixed", top: window.scrollY + 110 + "px", zIndex: 1000, width: "45%"}
      )
    } else {
      changeStyle(
        {position: "relative"}
      )
    }
  }

  const handleChange = (e) => {
    props.filterAgents(e.target.value)
    changeInput(e.target.value)
  }

  return (
    <div className="fl a2 h5 w-25" style={style}>
      <h2>Find Your Medium</h2>
      <input value={input} onChange={handleChange}></input>
    </div>
  )
}

export default connect(null, { filterAgents })(AgentFilter)
