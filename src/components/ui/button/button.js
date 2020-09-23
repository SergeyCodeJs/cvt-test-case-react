import React from 'react'
import classes from './button.module.scss'

export default function Button({type}) {
    const cls = type === 'search'
        ? (`${classes.button} ${classes.search__button}`)
        : (`${classes.login__button} ${classes.button}`);

    const buttonText = type === 'search'
        ? 'Найти'
        : 'Войти';

    return (
        <button className={cls}>{buttonText}</button>
    )
}
