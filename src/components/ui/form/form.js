import React from 'react'
import classes from './form.module.scss'

export default function Form(props) {
    const {action, onSubmit} = props;

    return (
        <form action={action} onsubmit={onSubmit}>
            {props.children}
        </form>
    )
}
