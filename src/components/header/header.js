import React from 'react'
import classes from './header.module.scss'
import Logo from './logo/logo'
import Form from '../ui/form/form'
import Button from '../ui/button/button'
import Input from '../ui/input/input'
import HeaderLogin from './header-login/header-login'
import propTypes from 'prop-types'

export default function Header({
    isLoggedIn,
    isLoginWindowOpen,
    userName,
    onLoginClickHandler,
    onUserNameClick,
    changeUserNameInputValue,
    onNewUserNameChange,
    showNewUserInput
}) {
    const {header} = classes;
    return (
        <header className={header}>
            <Logo title="Видеосервис"/>
            <Form className={classes.header__form} action="#" onSubmit={(e) => e.preventDefault()}>
                <Input type="text" placeholder="Поиск..."/>
                <Button type="search"/>
            </Form>
            <HeaderLogin
                userName={userName}
                onLoginClickHandler={onLoginClickHandler}
                onUserNameClick={onUserNameClick}
                isLoggedIn={isLoggedIn}
                isLoginWindowOpen={isLoginWindowOpen}
                changeUserNameInputValue={changeUserNameInputValue}onNewUserNameChange={onNewUserNameChange}
                showNewUserInput={showNewUserInput}
                />
        </header>
    )
}


Header.propTypes = {
    isLoggedIn: propTypes.bool.isRequired,
    isLoginWindowOpen: propTypes.bool.isRequired,
    userName: propTypes.string.isRequired,
    onLoginClickHandler: propTypes.func.isRequired,
    onUserNameClick: propTypes.func.isRequired,
    changeUserNameInputValue: propTypes.string.isRequired,
    onNewUserNameChange: propTypes.func.isRequired,
    showNewUserInput: propTypes.bool.isRequired
}
