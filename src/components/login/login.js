import React, {Fragment} from 'react'
import {connect} from 'react-redux'
import classes from './login.module.scss'
import Form from '../ui/form/form'
import Input from '../ui/input/input'
import CustomCheckbox from '../ui/custom-checkbox/custom-checkbox'
import Button from '../ui/button/button'
import Backdrop from '../ui/backdrop/backdrop'
import {closeLoginWindow, onInputChange} from '../../redux/actions/actions'

function Login({
    isLoggedIn,
    loginErrorText,
    isLoginWindowOpen,
    loginInputValue,
    passwordInputValue,
    isChecked,
    onLoginWindowClose,
    onInputChange
}) {
    const {login, login__title, login__form, login__input, validation} = classes;
    if (!isLoginWindowOpen || isLoggedIn) {
        return null
    }

    return (
        <Fragment>
            <Backdrop show={true} click={onLoginWindowClose}/>
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
                            onInputChange={null}
                            isChecked={isChecked}
                            label="Запомнить"
                            name="remember"
                            id="remember"/>
                    </div>
                    <span className={validation}>{loginErrorText}</span>
                    <Button onClickHandler={null} align={true} marginTop="-4px"/>
                </Form>
            </div>
        </Fragment>
    )
}

const mapStateToProps = ({
    isLoggedIn,
    loginErrorText,
    isLoginWindowOpen,
    loginInputValue,
    passwordInputValue,
    isChecked
}) => {
    return {
        isLoggedIn,
        loginErrorText,
        isLoginWindowOpen,
        loginInputValue,
        passwordInputValue,
        isChecked
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        onLoginWindowClose: () => dispatch(closeLoginWindow()),
        onInputChange: (e) => dispatch(onInputChange(e))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)