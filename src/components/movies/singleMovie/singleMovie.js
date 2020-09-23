import React from 'react'
import classes from '../singleMovie/singleMovie.module.scss'

export default function SingleMovie({movieName, logoSrc, description}) {
    const {movie__container, movie, movie__img, movie__description, movie__title} = classes;
    
    return (
        <div className={movie__container}>
            <div className={movie}>
                <img className={movie__img} src={logoSrc} alt={movieName}></img>
                <p className={movie__description}>{description}</p>
            </div>
            <p className={movie__title}>{movieName}</p>
        </div>
    )
}