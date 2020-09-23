import React from 'react'
import Channel from './channel/channel'
import classes from './channels-container.module.scss'

export default function ChannelsContainer({channels}) {
    const channelsComponents = renderChannels(channels);

    return (
        <div className={classes.channels__wrapper}>
            <div className={classes.channels}>
                {channelsComponents}
            </div>
        </div>
    )
}

function renderChannels(channels) {
    return channels.map((channel, index) => {
        const {name, logo, schedule} = channel;
        return (<Channel key={index} name={name} logo={logo} schedule={schedule}/>)
    })
}