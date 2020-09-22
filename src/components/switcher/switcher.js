import React from 'react'
import classes from './switcher.module.scss'

export default function Switcher() {
    return (
        <div className={`${classes.switcher} ${classes.switcher__margin}`}>
            <a className={`${classes.link} ${classes.link__active}`} href="#">Фильмы</a>
            <a className={classes.link} href="#">Телеканалы</a>
        </div>
    )
}
