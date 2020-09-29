import React from 'react'
import DummyMoviesService from '../services/dummyMoviesService'

const movieService = new DummyMoviesService();

function withDummyMovieService(Wrapped) {
    const getMovies = movieService.getAllMovies;
    const getChannels = movieService.getAllChannels;
    const getGenres = movieService.getAllGenres;
    return (props) => (
        <Wrapped {...props} getMovies={getMovies} getChannels={getChannels} getGenres={getGenres}></Wrapped>
    )

}

export default withDummyMovieService