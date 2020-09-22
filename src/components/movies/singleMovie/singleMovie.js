import React from 'react'
import classes from '../singleMovie/singleMovie.module.scss'

export default function SingleMovie() {
  return (
    <div className={classes.movie__container}>
      <div className={classes.movie}>
        <img className={classes.movie__img} src={logoSrc} alt={name}></img>
        <p className={classes.movie__description}>{description}</p>
      </div>
      <p className={classes.movie__title}>{name}</p>
    </div>
  )
}