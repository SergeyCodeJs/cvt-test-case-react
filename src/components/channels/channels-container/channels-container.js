import React from 'react'
import renderChannels from './renderChannels'
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


export default withData(ChannelsContainer)