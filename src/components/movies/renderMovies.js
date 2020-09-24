import React, {useState, useEffect} from 'react'
import MoviesContainer from './movies-container/moviesContainer'

function Movies({movieService}) {
    const [movies,
        setMovies] = useState(null);

    useEffect(() => {
        movieService
            .getAllMovies()
            .then(movie => setMovies(movie))
    }, [movieService])

    if (!movies) {
        return null
    }

    return (
        <MoviesContainer movies={movies}/>
    )
}

export default Movies