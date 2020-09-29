import React from 'react'
import classes from './backdrop.module.scss'
import useLockBodyScroll from './useLockBodyScroll'
import propTypes from 'prop-types'

export default function Backdrop({show, onClick}) {
  const {backdrop} = classes;
  useLockBodyScroll();
  
    return (
      show ? <div onClick={onClick} className={backdrop}></div> : null
    )
}

Backdrop.propTypes = {
  show: propTypes.bool,
  click: propTypes.func
}