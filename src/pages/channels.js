import React from 'react'
import ChannelsContainer from '../components/channels/channels-container/channels-container'
import withDummyVideoService from '../hoc/withDummyMovieService'
import withChannels from '../hoc/withChannels'

function Channels({channels}) {
    return (<ChannelsContainer channels={channels}/>)
}

export default withDummyVideoService(withChannels(Channels))
