import React from 'react'
import classes from './form.module.scss'

export default function Form(props) {
    const {action, onSubmit, className} = props;

    let cls = "";

    if (className) {
        cls = className;
    }
    
    return (
        <form className={cls} action={action} onsubmit={onSubmit}>
            {props.children}
        </form>
    )
}
