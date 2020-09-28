import React from 'react'
import classes from './custom-checkbox.module.scss'
import propTypes from 'prop-types'

export default function CustomCheckbox({label, name, id, onInputChange, isChecked}) {
    const {custom_checkbox, checkbox_label} = classes;

    return (
        <div>
            <input type="checkbox" checked={isChecked} onChange={onInputChange} className={custom_checkbox} name={name} id={id}/>
            <label className={checkbox_label} htmlFor={id}>{label}</label>
        </div>
    )
}

CustomCheckbox.propTypes = {
    label: propTypes.string.isRequired,
    name: propTypes.string.isRequired,
    id: propTypes.oneOfType([propTypes.string, propTypes.number]), onInputChange: propTypes.func.isRequired, 
    isChecked: propTypes.bool.isRequired
}