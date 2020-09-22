import React from 'react'
import classes from './logo.module.scss'

export default function logo({title}) {
    return (
        <div className={classes.header__logo}>
            <div className={classes.icon}></div>
            <h1 className={classes.title}>{title}</h1>
        </div>
    )
}
