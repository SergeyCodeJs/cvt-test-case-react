import React from 'react'
import classes from './movies-container.module.scss'
import SingleMovie from '../singleMovie/singleMovie'

export default function MoviesContainer({movies}) {
    const {movies__container, viewport, content} = classes;
    return (
        <div className={movies__container}>
            <div className={viewport}>
                <div className={content}>
                    {renderMovies(movies)}
                </div>
            </div>
        </div>
    )
}

function renderMovies(data) {
    return data.map((movie, index) => {
        const {name, logoSrc, description} = movie;
        return <SingleMovie
            key={index}
            movieName={name}
            logoSrc={logoSrc}
            description={description}/>
    })
}