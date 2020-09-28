import React from 'react'
import classes from './movies-container.module.scss'
import SingleMovie from '../singleMovie/singleMovie'
import propTypes from 'prop-types'

export default function MoviesContainer({movies}) {
    const {movies__container, viewport, content} = classes;
    const movieComponents = renderMovies(movies);

    return (
        <div className={movies__container}>
            <div className={viewport}>
                <div className={content}>
                    {movieComponents}
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

MoviesContainer.propTypes = {
    movies: propTypes.array
}

renderMovies.propTypes = {
    data: propTypes.array,
    name: propTypes.string.isRequired,
    logoSrc: propTypes.string.isRequired,
    description: propTypes.string.isRequired
}