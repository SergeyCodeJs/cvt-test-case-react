import React, {useState, useEffect} from 'react'
import Channel from './channels/channel'
import classes from './channels-container.module.scss'

export default function ChannelsContainer({movieService}) {
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

  return (
    <div className={classes.channels}>
      {renderChannels(channels)}
    </div>
  )
}

function renderChannels(channels) {
  return channels.map((channel, index) => {
    const {name, logo, schedule} = channel;
    return (
      <Channel key={index} name={name} logo={logo} schedule={schedule}/>
    )
  })
}