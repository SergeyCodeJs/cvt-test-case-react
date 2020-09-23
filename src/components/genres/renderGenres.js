import React, {useState, useEffect} from 'react'
import GenresContainer from './genres-container/genresContainer'

export default function Genres({movieService}) {
    const [genres,
        setGenres] = useState(null);

    useEffect(() => {
        movieService
            .getAllGenres()
            .then(genre => setGenres(genre));
    }, [])

    if (!genres) {
        return null
    }

    return <GenresContainer genres={genres}/>
}
