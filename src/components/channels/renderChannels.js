import React, {useState, useEffect} from 'react'
import ChannelsContainer from './channels-container/channels-container'

export default function RenderChannels({movieService}) {
    const [channels,
        setChannels] = useState(null);

    useEffect(() => {
        movieService
            .getAllChannels()
            .then(channel => setChannels(channel))
    }, [])

    if (!channels) {
        return null
    }

    return (<ChannelsContainer channels={channels}/>)
}
