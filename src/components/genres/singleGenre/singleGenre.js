import React from 'react'
import classes from './singleGenre.module.scss'

export default function SingleGenre({smile, singleGenre, background}) {
    
    return (
        <div style={{background: background}} className={classes.movies__genre}>
            <p className={classes.icon}><img src={smile} alt={singleGenre}/></p>
            <p className={classes.text}>{singleGenre}</p>
        </div>
    )
}
