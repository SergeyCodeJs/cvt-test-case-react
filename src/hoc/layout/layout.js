import React, {Fragment} from 'react'
import Footer from '../../components/footer/footer'
import Header from '../../components/header/header'

export default(props) => {
    const {isLoggedIn, isLoginWindowOpen, onLoginClickHandler, userName, onUserNameClick, newUserNameInputValue, onNewUserNameChange, showNewUserInput} = props;

    return (
        <Fragment>
            <Header
                userName={userName}
                isLoggedIn={isLoggedIn}
                isLoginWindowOpen={isLoginWindowOpen}
                onLoginClickHandler={onLoginClickHandler}
                onUserNameClick={onUserNameClick}
                newUserNameInputValue={newUserNameInputValue}
                onNewUserNameChange={onNewUserNameChange}
                showNewUserInput={showNewUserInput}
                />
            <main className="main">
                {props.children}
            </main>
            <Footer/>
        </Fragment>
    )
}