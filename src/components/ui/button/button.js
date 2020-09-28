import React from 'react'
import classes from './button.module.scss'
import propTypes from 'prop-types'

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
        <button style={{marginTop: marginTop}} id={type} className={cls.join(' ')} onClick={onClickHandler}>{buttonText}</button>
    )
}


Button.propTypes = {
    type: propTypes.string,
    align: propTypes.bool, 
    marginTop: propTypes.string,
    onClickHandler: propTypes.func
}