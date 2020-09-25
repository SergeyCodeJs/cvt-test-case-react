import React from 'react'
import Channel from './channel/channel'
import classes from './channels-container.module.scss'
import withData from '../../../hoc/withData'

function ChannelsContainer({data}) {
    const channelsComponents = renderChannels(data);

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


export default withData(ChannelsContainer)