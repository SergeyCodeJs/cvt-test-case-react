import React from 'react'
import classes from './button.module.scss'

export default function Button({type, align, marginTop}) {
    const cls = type === 'search'
        ? [classes.button, classes.search__button]
        : [classes.login__button, classes.button];

    const buttonText = type === 'search'
        ? 'Найти'
        : 'Войти';

    if (align) {
        cls.push(classes.align)
    }

    return (
        <button style={{marginTop: marginTop}} className={cls.join(' ')}>{buttonText}</button>
    )
}
