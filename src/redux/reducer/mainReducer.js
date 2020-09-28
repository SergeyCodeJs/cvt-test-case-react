import {
    FETCH_DATA_REQUEST,
    FETCH_DATA_SUCCESS,
    FETCH_DATA_FAILURE,
    ADD_TO_LOCAL_STORAGE,
    CLEAR_LOCAL_STORAGE,
    ON_LOGIN_WINDOW_OPEN,
    ON_LOGIN_WINDOW_CLOSE,
    ON_LOGIN,
    ON_LOGOUT,
    ON_INPUT_CHANGE,
    ON_USERNAME_CLICK
} from '../actions/actionTypes'

const initialState = {
    dataState: {
        movies: {
            data: null,
            loading: true,
            error: null
        },
        genres: {
            data: null,
            loading: true,
            error: null
        },
        channels: {
            data: null,
            loading: true,
            error: null
        }
    },
    isLoginWindowOpen: false,
    isLoggedIn: false,
    userName: "",
    userNameInputValue: "",
    showNewUserInput: false,
    loginInputValue: "",
    passwordInputValue: "",
    isCheckboxChecked: false,
    loginErrorText: ""
}

export default(state = initialState, action) => {
    switch (action.type) {
        case ON_LOGIN_WINDOW_OPEN:
            return {
                ...state,
                isLoginWindowOpen: !state.isLoginWindowOpen,
                loginInputValue: action.empty,
                passwordInputValue: action.empty,
                isCheckboxChecked: action.false
            }
        case ON_LOGIN_WINDOW_CLOSE:
            return {
                ...state,
                isLoggedIn: action.false,
                isLoginWindowOpen: action.false,
                isCheckboxChecked: action.false,
                userName: action.empty,
                loginInputValue: action.empty
            }
        case CLEAR_LOCAL_STORAGE:
            return {
                ...state
            }
        case ON_INPUT_CHANGE:
            const identifyInput = action.payload.target.name === 'login'
                ? "loginInputValue"
                : "passwordInputValue";

            return {
                ...state,
                [identifyInput]: action.payload.target.value
            }
        case FETCH_DATA_REQUEST:
            return {
                ...state,
                dataState: {
                    ...state.dataState,
                    [action.dataType]: {
                        [action.dataType]: [],
                        loading: true,
                        error: null
                    }
                }
            }
        case FETCH_DATA_SUCCESS:
            return {
                ...state,
                dataState: {
                    ...state.dataState,
                    [action.dataType]: {
                        data: action.payload,
                        loading: false,
                        error: null
                    }
                }
            }

        case FETCH_DATA_FAILURE:
            return {
                ...state,
                dataState: {
                    ...state.dataState,
                    [action.dataType]: {
                        [action.dataType]: [],
                        loading: false,
                        error: action.payload
                    }
                }
            }

        default:
            return state
    }
}
