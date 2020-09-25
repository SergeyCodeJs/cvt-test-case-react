import React, {useState} from 'react'
import classes from '../singleMovie/singleMovie.module.scss'

export default function SingleMovie({movieName, logoSrc, description}) {
    const {
        movie__container,
        movie,
        movie__img,
        movie__description,
        movie__title,
        low_brightness
    } = classes;

    const [showDescription,
        setShowDescription] = useState(false);

    function onHoverHandler(e) {
        if (e.type === 'mouseenter') {
            setShowDescription(true);

        } else {
            setShowDescription(false);
        }
    }

    const cls = showDescription
        ? [movie__img, low_brightness]
        : [movie__img];

    return (
        <div className={movie__container}>
            <div
                onMouseLeave={onHoverHandler}
                onMouseEnter={onHoverHandler}
                className={movie}>
                <img className={cls.join(' ')} src={logoSrc} alt={movieName}></img>
                {showDescription
                    ? <p className={movie__description}>{description}</p>
                    : null}
            </div>
            <p className={movie__title}>{movieName}</p>
        </div>
    )
}