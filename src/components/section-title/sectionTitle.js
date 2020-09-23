import React from 'react'
import classes from './sectionTitle.module.scss'

export default function SectionTitle({title}) {
  return (
    <h2 className={classes.section_title}>{title}</h2>
  )
}
