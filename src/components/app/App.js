import React, {useState, useEffect} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Layout from '../../hoc/layout/layout'
import Switcher from '../switcher/switcher'
import Movies from '../../pages/movies'
import Channels from '../../pages/channels'
import Login from '../login/login'
import ErrorBoundary from '../error-boundary/error-boundary'
import {validateInput} from '../../utils/validateInput'
import FailPage from '../../pages/failPage'

function App() {
    const [isLoggedIn,
        setIsLoggedIn] = useState(false);
    const [userName,
        setUserName] = useState("");
    const [newUserNameInputValue,
        setNewUserNameInputValue] = useState("");
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
        onDomLoad();
    }, [])

    const onDomLoad = () => {
        const userName = localStorage.getItem('userName') || "";
        const loggedIn = Boolean(localStorage.getItem("isLoggedIn")) || false;
        setIsLoggedIn(loggedIn);
        setUserName(userName);
    }

    const loginWindowHandler = () => {
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

        if (inputName === "changeName") {
            e.preventDefault();
            setNewUserNameInputValue(inputValue);

            if (e.type === 'blur') {
                if (!validateInput(newUserNameInputValue, e.type)) {
                    return
                }
                setUserName(newUserNameInputValue);
                setShowNewUserInput(false);
                localStorage.setItem('userName', newUserNameInputValue);
                localStorage.setItem('isLoggedIn', true);
            }
        }
    }

    const onLoginButtonClickHandler = (e) => {
        e.preventDefault();

        if (!validateInput(loginInputValue, undefined, setLoginErrorText)) {
            return
        };

        setIsLoggedIn(true);
        setUserName(loginInputValue);

        if (isCheckboxChecked) {
            localStorage.setItem('userName', loginInputValue);
            localStorage.setItem('isLoggedIn', true);
        }
    }

    const onUserNameClickHandler = () => {
        setShowNewUserInput(true);
        setNewUserNameInputValue(userName);
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
                    newUserNameInputValue={newUserNameInputValue}
                    onNewUserNameChange={inputChangeHandler}>
                    <Switcher/>
                    <Switch>
                        <Route exact path="/">
                            <Movies/>
                        </Route>
                        <Route path="/channels">
                            <Channels/>
                        </Route>
                        <Route path='*' component={FailPage}></Route>
                    </Switch>
                    <Login
                        isLoginWindowOpen={isLoginWindowOpen}
                        isLoggedIn={isLoggedIn}
                        isChecked={isCheckboxChecked}
                        loginInputValue={loginInputValue}
                        passwordInputValue={passwordInputValue}
                        loginErrorText={loginErrorText}
                        onLoginButtonClick={onLoginButtonClickHandler}
                        onBackdropClick={loginWindowHandler}
                        onInputChange={inputChangeHandler}/>
                </Layout>
            </Router>
        </ErrorBoundary>
    );
}

export default App;
