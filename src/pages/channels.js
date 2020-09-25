import React from 'react'
import ChannelsContainer from '../components/channels/channels-container/channels-container'
import withDummyVideoService from '../hoc/withDummyMovieService'

function Channels({movieService}) {
    const channelsData = movieService.getAllChannels;

    return (<ChannelsContainer getData = {channelsData}/>)
}

export default withDummyVideoService(Channels)
