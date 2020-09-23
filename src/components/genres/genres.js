import React, {useState, useEffect} from 'react'
import SingleGenre from './singleGenre/singleGenre'
import classes from './genres.module.scss'

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

    return (
        <div style={{}} className={classes.movies__genre}>
            <div className={classes.genres__container}>
                {renderGenres(genres)}
            </div>
        </div>
    )
}

function renderGenres(genres) {
    return genres.map((singleGenre, index) => {
        const {smile, genre, background} = singleGenre;
        
        return <SingleGenre key={index} smile={smile} singleGenre={genre} background={background}/>
    })
}