import React from 'react'
import classes from './input.module.scss'

export default function Input({
    type,
    name,
    id,
    placeholder,
    className,
    onInputChange,
    value
}) {
    
    const cls = [classes.input];
    if (className) {
        cls.push(className);
    }

    return (
        <input
            className={cls.join(' ')}
            type={type}
            name={name}
            id={id}
            placeholder={placeholder}
            onChange={onInputChange}
            value={value}
            onBlur={onInputChange}
            ></input>
    )
}
