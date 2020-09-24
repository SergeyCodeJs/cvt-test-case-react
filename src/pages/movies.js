import React, {Fragment} from 'react'

import RenderMovies from '../components/movies/renderMovies'
import Genres from '../components/genres/renderGenres'
import SectionTitle from '../components/section-title/sectionTitle'

export default function Movies({movieService}) {
    return (
        <Fragment>
            <SectionTitle title="&#128293;     Новинки"/>
            <RenderMovies movieService={movieService}/>
            <SectionTitle title="Жанры"/>
            <Genres movieService={movieService}/>
        </Fragment>
    )
}
