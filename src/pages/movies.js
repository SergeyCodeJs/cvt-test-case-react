import React, {Fragment} from 'react'

import RenderMovies from '../components/movies/renderMovies'
import Genres from '../components/genres/renderGenres'
import SectionTitle from '../components/section-title/sectionTitle'

import withDummyVideoService from '../hoc/withDummyMovieService'

function Movies({movieService}) {
    const moviesData = movieService.getAllMovies;  

    return (
        <Fragment>
            <SectionTitle title="&#128293;     Новинки"/>
            <RenderMovies getData={moviesData}/>
            <SectionTitle title="Жанры"/>
            <Genres movieService={movieService}/>
        </Fragment>
    )
}

export default withDummyVideoService(Movies)