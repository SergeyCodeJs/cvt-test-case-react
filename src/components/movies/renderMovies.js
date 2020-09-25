import React from 'react'
import MoviesContainer from './movies-container/moviesContainer'
import withData from '../../hoc/withData'

function Movies({data}) {
    return (
        <MoviesContainer movies={data}/>
    )
}

export default withData(Movies)