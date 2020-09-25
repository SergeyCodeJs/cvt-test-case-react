import React, {Fragment} from 'react'
import classes from './login.module.scss'
import Form from '../ui/form/form'
import Input from '../ui/input/input'
import CustomCheckbox from '../ui/custom-checkbox/custom-checkbox'
import Button from '../ui/button/button'
import Backdrop from '../ui/backdrop/backdrop'

export default function Login({
    loginWindowHandler,
    isLoggedIn,
    loginErrorText,
    onLoginButtonClick,
    isLoginWindowOpen,
    onInputChange,
    loginInputValue,
    passwordInputValue,
    isChecked
}) {
    const {login, login__title, login__form, login__input, validation} = classes;
    if (!isLoginWindowOpen || isLoggedIn) {
        return null
    }

    return (
        <Fragment>
            <Backdrop show={true} click={loginWindowHandler}/>
            <div className={login}>
                <h2 className={login__title}>Вход</h2>
                <Form className={login__form} action="#">
                    <div>
                        <Input
                            className={login__input}
                            type="text"
                            name="login"
                            id="login"
                            placeholder="Логин"
                            onInputChange={onInputChange}
                            value={loginInputValue}/>
                        <Input
                            className={login__input}
                            type="password"
                            name="password"
                            id="password"
                            placeholder="Пароль"
                            onInputChange={onInputChange}
                            value={passwordInputValue}/>
                    </div>
                    <div>
                        <CustomCheckbox
                            onInputChange={onInputChange}
                            isChecked={isChecked}
                            label="Запомнить"
                            name="remember"
                            id="remember"/>
                    </div>
                    <span className={validation}>{loginErrorText}</span>
                    <Button onClickHandler={onLoginButtonClick} align={true} marginTop="-4px"/>
                </Form>
            </div>
        </Fragment>
    )
}