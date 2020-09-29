import React, {Fragment} from 'react'

import RenderMovies from '../components/movies/renderMovies'
import Genres from '../components/genres/renderGenres'
import SectionTitle from '../components/section-title/sectionTitle'
import withMovies from '../hoc/withMovies'

import withDummyVideoService from '../hoc/withDummyMovieService'

function Movies({movies, genres}) {
    return (
        <Fragment>
            <SectionTitle title="&#128293;     Новинки"/>
            <RenderMovies movies={movies}/>
            <SectionTitle title="Жанры"/>
            <Genres genres={genres}/>
        </Fragment>
    )
}

export default withDummyVideoService(withMovies(Movies))