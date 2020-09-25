import React from 'react'
import classes from './button.module.scss'

export default function Button({type, align, marginTop, onClickHandler}) {
    let cls = type === 'search'
        ? [classes.button, classes.search__button]
        : [classes.login__button, classes.button];

    let buttonText = type === 'search'
        ? 'Найти'
        : 'Войти';
        
    if (type === 'exit') {
        cls = [classes.button, classes.button_exit];
        buttonText = 'Выйти'
    }

    if (align) {
        cls.push(classes.align);
    }

    return (
        <button style={{marginTop: marginTop}} className={cls.join(' ')} onClick={onClickHandler}>{buttonText}</button>
    )
}
