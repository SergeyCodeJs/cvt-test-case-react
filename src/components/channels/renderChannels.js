import React, {useState, useEffect} from 'react'
import ChannelsContainer from './channels-container/channels-container'
import withDummyVideoService from '../../hoc/withDummyMovieService'

function RenderChannels({movieService}) {
    const [channels,
        setChannels] = useState(null);

    useEffect(() => {
        movieService
            .getAllChannels()
            .then(channel => setChannels(channel))
    }, [movieService])

    if (!channels) {
        return null
    }

    return (<ChannelsContainer channels={channels}/>)
}

export default withDummyVideoService(RenderChannels)
