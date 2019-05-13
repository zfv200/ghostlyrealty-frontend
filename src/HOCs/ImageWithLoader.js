import React, { useState } from 'react'

import GhostSpinner from '../components/GhostSpinner'

import { Image } from 'semantic-ui-react'

const ImageWithLoader = (props) => {

  const [loaded, changeLoading] = useState(false)
  const [hidden, unHide] = useState(true)

  const finishLoading = () => {
    const bundleTimeout = () =>{
      changeLoading(true)
      unHide(false)
    }
    setTimeout(bundleTimeout, 100)
  }

  const getVisibility = () => {
    if(hidden){
      return "none"
    } else {
      return "block"
    }
  }

  return (
    <div>
      <Image style={{...props.style, display: getVisibility()}} onLoad={finishLoading} src={props.images[0]}/>
      {!loaded ? <GhostSpinner style={props.style}/> : null}
    </div>
  )
}

export default ImageWithLoader
