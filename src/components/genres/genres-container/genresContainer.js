import React from 'react'
import SingleGenre from '../singleGenre/singleGenre'
import classes from './genres-container.module.scss'

export default function GenresContainer({genres}) {
    const {movies__genre, genres__container} = classes;
    const genreComponents = renderGenres(genres);

    return (
        <div style={{}} className={movies__genre}>
            <div className={genres__container}>
                {genreComponents}
            </div>
        </div>
    )
}

function renderGenres(genres) {
    return genres.map((singleGenre, index) => {
        const {smile, genre, background} = singleGenre;

        return <SingleGenre
            key={index}
            smile={smile}
            singleGenre={genre}
            background={background}/>
    })
}