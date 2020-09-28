import React from 'react'
import classes from './sectionTitle.module.scss'
import propTypes from 'prop-types'

export default function SectionTitle({title}) {
  return (
    <h2 className={classes.section_title}>{title}</h2>
  )
}

SectionTitle.propTypes = {
  title: propTypes.string.isRequired
}