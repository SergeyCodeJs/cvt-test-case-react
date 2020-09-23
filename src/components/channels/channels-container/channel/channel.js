import React from 'react'
import Schedule from './schedule/schedule'
import classes from './channels.module.scss'

export default function Channel({name, logo, schedule}) {
    const {channel, channel__logo_container, channel__logo, channel__schedule_container, channel__title} = classes;
    const scheduleComponents = renderSchedule(schedule);

    return (
        <div className={channel}>
            <div className={channel__logo_container}>
                <img className={channel__logo} src={logo}></img>
            </div>
            <div className={channel__schedule_container}>
                <h2 className={channel__title}>{name}</h2>
                {scheduleComponents}
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