import React from 'react'
import classes from './custom-checkbox.module.scss'

export default function CustomCheckbox({label, name, id}) {
    const {custom_checkbox, checkbox_label} = classes;

    return (
        <div>
            <input type="checkbox" className={custom_checkbox} name={name} id={id}/>
            <label className={checkbox_label} htmlFor={id}>{label}</label>
        </div>
    )
}
