import React from 'react'
import {NavLink} from 'react-router-dom'
import { withRouter } from 'react-router';
import classes from './switcher.module.scss'

function Switcher() {
    const {switcher, switcher__margin, link, link__active} = classes;
    return (
        <div className={`${switcher} ${switcher__margin}`}>
            <NavLink exact to="/">Фильмы</NavLink>
            <NavLink to="/channels">Телеканалы</NavLink>
        </div>
    )
}

export default withRouter(Switcher)
