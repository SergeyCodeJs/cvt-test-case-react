import React from 'react'

export default function Form(props) {
    const {action, onSubmit, className} = props;

    let cls = "";

    if (className) {
        cls = className;
    }
    
    return (
        <form className={cls} action={action} onSubmit={onSubmit}>
            {props.children}
        </form>
    )
}
