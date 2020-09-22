import React from 'react'
import classes from './input.module.scss'

export default function Input({type, placeholder}) {
  return (
    <input className={(classes.search__input + ' ' + classes.input)} type={type} placeholder={placeholder}></input>
  )
}
