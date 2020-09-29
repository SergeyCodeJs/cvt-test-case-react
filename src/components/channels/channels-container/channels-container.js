import React from 'react'
import renderChannels from './renderChannels'
import classes from './channels-container.module.scss'

function ChannelsContainer({channels}) {
    const channelsComponents = renderChannels(channels);

    return (
        <div className={classes.channels__wrapper}>
            <div className={classes.channels}>
                {channelsComponents}
            </div>
        </div>
    )
}


export default ChannelsContainer