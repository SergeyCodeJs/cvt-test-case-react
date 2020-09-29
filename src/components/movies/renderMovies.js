import React from 'react'
import MoviesContainer from './movies-container/moviesContainer'
import propTypes from 'prop-types'

function Movies({movies}) {
    return (
        <MoviesContainer movies={movies}/>
    )
}

export default Movies

Movies.propTypes = {
    data: propTypes.array
}