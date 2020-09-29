import React from 'react'
import classes from './header-login.module.scss'
import Button from '../../ui/button/button'
import Input from '../../ui/input/input'
import propTypes from 'prop-types'; 

export default function HeaderLogin({
    isLoggedIn,
    userName,
    onLoginClickHandler,
    onUserNameClick,
    newUserNameInputValue,
    onNewUserNameChange,
    showNewUserInput
}) {
    const {header__login_container, user_name} = classes;

    return (
        <div className={header__login_container}>
            {!showNewUserInput
                ? <p onClick={onUserNameClick} className={user_name}>{userName}</p>
                : null}
            {showNewUserInput
                ? <Input
                        type="text"
                        name="changeName"
                        id="changeName"
                        placeholder="Введите новое имя"
                        className={classes.new_name_input}
                        value={newUserNameInputValue}
                        onInputChange={onNewUserNameChange}/>
                : null}
            {!showNewUserInput
                ? <Button
                        onClickHandler={onLoginClickHandler}
                        type={!isLoggedIn
                        ? "login"
                        : "exit"}/>
                : null}
        </div>
    )
}

HeaderLogin.propTypes = {
    isLoggedIn: propTypes.bool.isRequired,
    userName: propTypes.string.isRequired,
    onLoginClickHandler: propTypes.func.isRequired,
    onUserNameClick: propTypes.func.isRequired,
    newUserNameInputValue: propTypes.string.isRequired,
    onNewUserNameChange: propTypes.func.isRequired,
    showNewUserInput: propTypes.bool.isRequired
}