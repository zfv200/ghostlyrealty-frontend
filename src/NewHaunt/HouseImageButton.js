import React, { useState, useEffect, useRef } from 'react'

import { Button, Image } from 'semantic-ui-react'

const HouseImageButton = (props) => {

  const [active, changeStatus] = useState(true)

  useEffect(() => {
    if(firstUpdate.current){
      firstUpdate.current = false;
      return;
    }
    props.handleImageClick(props.idx, active)
  }, [active])

  const firstUpdate = useRef(true)

  const buttonStyle = () => {
    return active ? null : {background: "red"}
  }

  return (
    <Button style={buttonStyle()} inverted onClick={()=>changeStatus(!active)}>
      <Image style={{height: "40px", width: "40px"}} src={props.image}/>
    </Button>
  )
}

export default HouseImageButton
