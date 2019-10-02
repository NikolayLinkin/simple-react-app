import * as types from "../constatns/ActionTypes";
import {callApi} from "../utils/ApiUtils";
import {USERS} from "../constatns/ApiConstants";

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
};