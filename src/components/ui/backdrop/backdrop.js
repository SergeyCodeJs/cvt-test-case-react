import React from 'react'
import classes from './backdrop.module.scss'
import useLockBodyScroll from './useLockBodyScroll'

export default function Backdrop({show, click}) {
  const {backdrop} = classes;
  useLockBodyScroll();
  
    return (
      show ? <div onClick={click} className={backdrop}></div> : null
    )
}
