import React, {Fragment, useState} from 'react'
import classes from './login.module.scss'
import Form from '../ui/form/form'
import Input from '../ui/input/input'
import CustomCheckbox from '../ui/custom-checkbox/custom-checkbox'
import Button from '../ui/button/button'
import Backdrop from '../ui/backdrop/backdrop'

export default function Login() {
    const {login, login__title, login__form, login__input, validation} = classes;

    const onBackDropClick = () => {
        console.log('backdrop click')
    }

    return (
        <Fragment>
            <Backdrop show={true} click={onBackDropClick}/>
            <div className={login}>
                <h2 className={login__title}>Вход</h2>
                <Form className={login__form} action="#">
                    <div>
                        <Input
                            className={login__input}
                            type="text"
                            name="login"
                            id="login"
                            placeholder="Логин"/>
                        <Input
                            className={login__input}
                            type="password"
                            name="password"
                            id="password"
                            placeholder="Пароль"/>
                    </div>
                    <div>
                        <CustomCheckbox label="Запомнить" name="remember" id="remember"/>
                    </div>
                    <span className={validation}></span>
                    <Button align={true} marginTop="-4px"/>
                </Form>
            </div>
        </Fragment>
    )
}
