import React from 'react'
import Channel from './channel/channel'

export default function renderChannels(channels) {
  return channels.map((channel, index) => {
      const {name, logo, schedule} = channel;
      return (<Channel key={index} name={name} logo={logo} schedule={schedule}/>)
  })
}