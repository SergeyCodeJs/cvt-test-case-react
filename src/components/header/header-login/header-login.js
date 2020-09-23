import React from 'react'
import classes from './header-login.module.scss'
import Button from '../../ui/button/button'

export default function HeaderLogin() {
    return (
        <div className={classes.header__login_container}>
            <p className={classes.user_name}></p>
            <Button type="login"/>
        </div>
    )
}
