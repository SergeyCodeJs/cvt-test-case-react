import React from 'react'
import classes from './switcher.module.scss'

export default function Switcher() {
    const {switcher, switcher__margin, link, link__active} = classes;
    return (
        <div className={`${switcher} ${switcher__margin}`}>
            <a className={`${link} ${link__active}`} href="#">Фильмы</a>
            <a className={link} href="#">Телеканалы</a>
        </div>
    )
}
