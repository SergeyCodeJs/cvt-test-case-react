import React from 'react'
import {connect} from 'react-redux'
import classes from './header-login.module.scss'
import Button from '../../ui/button/button'
import Input from '../../ui/input/input'
import {onLoginWindowOpen, closeLoginWindow} from '../../../redux/actions/actions'

function HeaderLogin({
    isLoggedIn,
    userName,
    onLoginWindowOpen,
    onLoginWindowClose,
    onLoginClickHandler,
    onUserNameClick,
    changeUserNameInputValue,
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
                        value={changeUserNameInputValue}
                        onInputChange={onNewUserNameChange}/>
                : null}
            {!showNewUserInput
                ? <Button
                        onClickHandler={onLoginWindowOpen}
                        type={!isLoggedIn
                        ? "login"
                        : "exit"}/>
                : null}
        </div>
    )
}

const mapStateToProps = ({isLoggedIn, userName, showNewUserInput}) => {
    return {isLoggedIn, userName, showNewUserInput}
}

const mapDispatchToProps = (dispatch) => {
    return {
        onLoginWindowClose: () => dispatch(closeLoginWindow()),
        onLoginWindowOpen: () => dispatch(onLoginWindowOpen())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HeaderLogin)