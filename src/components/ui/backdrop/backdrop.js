import React from 'react'
import classes from './backdrop.module.scss'
import useLockBodyScroll from './useLockBodyScroll'
import propTypes from 'prop-types'

export default function Backdrop({show, click}) {
  const {backdrop} = classes;
  useLockBodyScroll();
  
    return (
      show ? <div onClick={click} className={backdrop}></div> : null
    )
}

Backdrop.propTypes = {
  show: propTypes.bool,
  click: propTypes.func
}