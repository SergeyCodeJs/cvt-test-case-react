import React from 'react'
import classes from './header-login.module.scss'
import Button from '../../ui/button/button'

export default function HeaderLogin() {
    const {header__login_container, user_name} = classes;
    return (
        <div className={header__login_container}>
            <p className={user_name}></p>
            <Button type="login"/>
        </div>
    )
}
