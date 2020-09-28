import React from 'react'
import classes from './channels-container.module.scss'

export default function ChannelsContainer({channelsComponents}) {
    return (
        <div className={classes.channels__wrapper}>
            <div className={classes.channels}>
                {channelsComponents}
            </div>
        </div>
    )
}
