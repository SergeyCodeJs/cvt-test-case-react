import React from 'react'
import classes from '../components/movies/movies-container/movies-container.module.scss'

function FailPage() {
  const {movies__container, viewport, content} = classes;
    return (
        <div className={movies__container}>
            <div className={viewport}>
                <div className={content}>
                    404! Страница не найдена! Убедитесь, что вы перешли по правильному адресу !
                </div>
            </div>
        </div>
    )
}

export default FailPage
