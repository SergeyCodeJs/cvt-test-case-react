import React from 'react'
import classes from './logo.module.scss'
import propTypes from 'prop-types'

export default function Logo({title}) {
    return (
        <div className={classes.header__logo}>
            <div className={classes.icon}></div>
            <h1 className={classes.title}>{title}</h1>
        </div>
    )
}


Logo.propTypes = {
    title: propTypes.string.isRequired
}