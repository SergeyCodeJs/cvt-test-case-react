import React from 'react'
import classes from './header.module.scss'
import Logo from './logo/logo'
import Form from '../ui/form/form'
import Button from '../ui/button/button'
import Input from '../ui/input/input'
import HeaderLogin from './header-login/header-login'

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
    const {header, search__button} = classes;
    return (
        <header className={header}>
            <Logo title="Видеосервис"/>
            <Form className={classes.header__form} action="#" onSubmit={function () {
                return
            }}>
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
