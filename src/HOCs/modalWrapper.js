import React from 'react'

import styles from '../UserHeader/UserHeader.css.js'


function modalWrapper(WrappedComponent){

  const baseModal = (props) => {
    return (
      <div id="outer-popup" onClick={props.handleClick} style={styles.houseShowPageModal}>
        <div id="inner-outer-popup" style={styles.content}>
          <WrappedComponent {...props}/>
        </div>
      </div>
    )
  }

  return baseModal
}


export default modalWrapper
