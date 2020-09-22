import React from 'react'
import classes from './movies.module.scss'

export default function Movies(props) {
  return (
    <div className={classes.movies__container}>
      <div className={classes.viewport}>
        <div className={classes.content}>
          {props.children}
        </div>
      </div>
    </div>
  )
}
