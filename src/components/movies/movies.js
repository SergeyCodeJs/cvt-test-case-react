import React, {useState, useEffect} from 'react'
import classes from './movies.module.scss'
import SingleMovie from './singleMovie/singleMovie'

function Movies({movieService}) {
    const [movies,
        setMovies] = useState(null);

    useEffect(() => {
        movieService
            .getAllMovies()
            .then(movie => setMovies(movie))
    }, [])

    if (!movies) {
        return null
    }

    return (
        <div className={classes.movies__container}>
            <div className={classes.viewport}>
                <div className={classes.content}>
                    {renderMovies(movies)}
                </div>
            </div>
        </div>
    )
}

function renderMovies(data) {
    return data.map((movie, index) => {
        const {name, logoSrc, description} = movie;
        return <SingleMovie
            key={index}
            movieName={name}
            logoSrc={logoSrc}
            description={description}/>
    })
}

export default Movies