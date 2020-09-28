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
} from './actionTypes'


function fetchDataRequest(dataType) {
    return {type: FETCH_DATA_REQUEST, dataType}
}

function fetchDataSuccess(data, dataType) {
    return {type: FETCH_DATA_SUCCESS, payload: data, dataType}
}

function fetchDataFailure(e) {
    return {type: FETCH_DATA_FAILURE, payload: e}
}

function addToLocalStorage() {
    return {type: ADD_TO_LOCAL_STORAGE}
}

function clearLocalStorage() {
    return {type: CLEAR_LOCAL_STORAGE}
}

function onLoginWindowOpen() {
    return {type: ON_LOGIN_WINDOW_OPEN, empty: "", false: false}
}

function onLoginWindowClose() {
    return {type: ON_LOGIN_WINDOW_CLOSE, empty: "", false: false}
}

function onLogin() {
    return {type: ON_LOGIN}
}

function onLogout() {
    return {type: ON_LOGOUT}
}

function onInputChange(e) {
    return {type: ON_INPUT_CHANGE, payload: e}
}

function onUserNameClick() {
    return {type: ON_USERNAME_CLICK}
}

const fetchData = (dummyVideoService, dataType) => () => (dispatch) => {
    dispatch(fetchDataRequest(dataType));
    
    let getData = null;
    
    if (dataType === "movies") {
        getData = dummyVideoService.getAllMovies;
    } else if (dataType === "genres") {
        getData = dummyVideoService.getAllGenres;
    } else {
        getData = dummyVideoService.getAllChannels;
    }

    getData()
        .then(data => dispatch(fetchDataSuccess(data, dataType)))
        .catch(e => dispatch(fetchDataFailure(e)));
}

const saveInStorage = (isLoggedIn, userName) => () => (dispatch) => {
  localStorage.setItem('isLoggedIn', isLoggedIn);
  localStorage.setItem('userName', userName);
  dispatch(addToLocalStorage);
}

const clearStorage = () => () => (dispatch) => {
  localStorage.clear();
  dispatch(clearLocalStorage);
}

const closeLoginWindow = () => (dispatch) => {
  dispatch(onLoginWindowClose());
  clearStorage();
}

export {
    fetchData,
    saveInStorage,
    clearLocalStorage,
    onLoginWindowOpen,
    closeLoginWindow,
    onLogin,
    onLogout,
    onInputChange,
    onUserNameClick
}