import React from 'react'
import classes from './schedule.module.scss'

export default function Schedule({time, title}) {
    return (
        <div className={classes.channel__program_container}>
            <p className={classes.channel__time}>${time}</p>
            <p className={classes.channel__program_title}>{title}</p>
        </div>
    )
}
