import React, {useState, useEffect} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Layout from '../../hoc/layout/layout'
import Switcher from '../switcher/switcher'
import Movies from '../../pages/movies'
import Channels from '../../pages/channels'
import Login from '../login/login'
import ErrorBoundary from '../error-boundary/error-boundary'

function App() {
    const [isLoggedIn,
        setIsLoggedIn] = useState(false);
    const [userName,
        setUserName] = useState("");
    const [userNameInputValue,
        setUserNameInputValue] = useState("");
    const [showNewUserInput,
        setShowNewUserInput] = useState(false);
    const [isLoginWindowOpen,
        setIsLoginWindowOpen] = useState(false);
    const [loginInputValue,
        setLoginInputValue] = useState("");
    const [passwordInputValue,
        setPasswordInputValue] = useState("");
    const [isCheckboxChecked,
        setIsCheckboxChecked] = useState(false);
    const [loginErrorText,
        setLoginErrorText] = useState("");

    useEffect(() => {
        const login = localStorage.getItem('login') || "";
        const loggedIn = Boolean(localStorage.getItem("isLoggedIn")) || false;
        setIsLoggedIn(loggedIn);
        setUserName(login);
    }, [])

    function loginWindowHandler() {
        if (!isLoggedIn) {
            setIsLoginWindowOpen(isLoginWindowOpen => !isLoginWindowOpen);
            setLoginInputValue("");
            setPasswordInputValue("");
            setIsCheckboxChecked(false);
        } else {
            onLogout();
        }
    }

    const onLogout = () => {
        localStorage.clear();
        setIsLoggedIn(false);
        setUserName("");
        setIsLoginWindowOpen(false);
        setLoginInputValue("");
        setPasswordInputValue("");
        setIsCheckboxChecked(false);
    }

    const inputChangeHandler = (e) => {
        const inputTarget = e.target
        const inputName = inputTarget.name;
        const inputValue = inputTarget.value;

        if (inputName === 'login') {
            e.preventDefault();
            setLoginInputValue(inputValue);
        }
        if (inputName === 'password') {
            e.preventDefault();
            setPasswordInputValue(inputValue);
        }
        if (inputName === 'remember') {
            setIsCheckboxChecked(prev => !prev);
        }
    }

    const onLoginButtonClickHandler = (e) => {
        e.preventDefault();

        if (loginInputValue === "") {
            setLoginErrorText("Поле логина не может быть пустым, пожалуйста, введите логин!")
            return
        }

        if (loginInputValue.length > 13) {
            setLoginErrorText("Поле логина не может быть длиннее 13 символов, пожалуйста, введите более коротки" +
                    "й логин")
            return
        }
        setIsLoggedIn(true);
        setUserName(loginInputValue);

        if (isCheckboxChecked) {
            localStorage.setItem('login', loginInputValue);
            localStorage.setItem('isLoggedIn', true);
        }
    }

    const onUserNameClickHandler = () => {
        setShowNewUserInput(true);
        setUserNameInputValue(userName);
    }

    const onNewUserNameChangeHandler = (e) => {
        e.preventDefault();
        setUserNameInputValue(e.target.value);

        if (e.type === 'blur') {
            if (userNameInputValue === "") {
                alert("Поле логина не может быть пустым, пожалуйста, введите логин!")
                return
            }

            if (userNameInputValue.length > 13) {
                alert("Поле логина не может быть длиннее 13 символов, пожалуйста, введите более коротки" +
                        "й логин")
                return
            }

            setUserName(userNameInputValue);
            setShowNewUserInput(false);
            localStorage.setItem('login', userNameInputValue);
            localStorage.setItem('isLoggedIn', true);
        }
    }

    return (
        <ErrorBoundary>
            <Router>
                <Layout
                    isLoggedIn={isLoggedIn}
                    isLoginWindowOpen={isLoginWindowOpen}
                    userName={userName}
                    onLoginClickHandler={loginWindowHandler}
                    onUserNameClick={onUserNameClickHandler}
                    showNewUserInput={showNewUserInput}
                    changeUserNameInputValue={userNameInputValue}
                    onNewUserNameChange={onNewUserNameChangeHandler}>
                    <Switcher/>
                    <Switch>
                        <Route path="/channels">
                            <Channels/>
                        </Route>
                        <Route path="/">
                            <Movies/>
                        </Route>
                        <Route component={Movies}></Route>
                    </Switch>
                    <Login
                        isLoginWindowOpen={isLoginWindowOpen}
                        isLoggedIn={isLoggedIn}
                        isChecked={isCheckboxChecked}
                        loginInputValue={loginInputValue}
                        passwordInputValue={passwordInputValue}
                        loginErrorText={loginErrorText}
                        onLoginButtonClick={onLoginButtonClickHandler}
                        loginWindowHandler={loginWindowHandler}
                        onInputChange={inputChangeHandler}/>
                </Layout>
            </Router>
        </ErrorBoundary>
    );
}

export default App;
