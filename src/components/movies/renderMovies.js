import React from 'react'
import MoviesContainer from './movies-container/moviesContainer'
import withData from '../../hoc/withData'
import propTypes from 'prop-types'

function Movies({data}) {
    return (
        <MoviesContainer movies={data}/>
    )
}

export default withData(Movies)

Movies.propTypes = {
    data: propTypes.array
}