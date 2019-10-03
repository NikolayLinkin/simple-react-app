import * as types from "../constatns/ActionTypes";
import {callApi} from "../utils/ApiUtils";
import {LOGIN, USERS} from "../constatns/ApiConstants";
import auth from "../reducers/auth";

const fetchRegisterError = errors => ({
    type: types.FETCH_REGISTER_ERROR,
    errors,
});

const fetchRegisterSuccess = (user, authToken) => ({
    type: types.FETCH_REGISTER_SUCCESS,
    user,
    authToken,
});

export const fetchRegister = (username, email, password) => async dispatch => {
    dispatch({type: types.FETCH_REGISTER_REQ});

    const options = {
        method: "POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({user: {username, email, password}})
    };

    const {json} = await callApi(USERS, options);

    if (json.errors) {
        dispatch(fetchRegisterError(json.errors));
        return false;
    }

    const {authToken} = json;

    dispatch(fetchRegisterSuccess(json, authToken));
    localStorage.setItem('jwt', authToken);
};

const fetchLoginError = errors => ({
    type: types.FETCH_LOGIN_ERROR,
    errors,
});

const fetchLoginSuccess = (user, authToken) => ({
    type: types.FETCH_LOGIN_SUCCESS,
    user,
    authToken,
});

export const fetchLogin = (email, password) => async dispatch => {
    dispatch({type: types.FETCH_LOGIN_REQ});

    const options = {
        method: "POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({user: {email, password}}),
    };

    const {json} = await callApi(LOGIN, options);

    if(json.errors) {
        dispatch(fetchLoginError(json.errors));
        return false;
    }

    const {authToken} = json;

    dispatch(fetchLoginSuccess(json, authToken));
    localStorage.setItem('jwt', authToken);
};