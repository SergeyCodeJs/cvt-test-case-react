import React from 'react'
import Schedule from './schedule/schedule'
import classes from './channels.module.scss'

export default function Channel({name, logo, schedule}) {
    return (
        <div className={classes.channel}>
            <div className={classes.channel__logo_container}>
                <img className={classes.channel__logo} src={logo}></img>
            </div>
            <div className={classes.channel__schedule_container}>
                <h2 className={classes.channel__title}>{name}</h2>
                {renderSchedule(schedule)}
            </div>
        </div>
    )
}

function renderSchedule(schedule) {
    return schedule.map((channelSchedule, index) => {
        const {time, title} = channelSchedule;
        return <Schedule key={index} time={time} title={title}/>
    })
}