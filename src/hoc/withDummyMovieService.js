import React from 'react'
import DummyMoviesService from '../services/dummyMoviesService'

const movieService = new DummyMoviesService();

function withDummyMovieService(Wrapped) {
    return (props) => (
        <Wrapped {...props} movieService={movieService}></Wrapped>
    )

}

export default withDummyMovieService