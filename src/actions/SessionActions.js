import * as types from "../constatns/ActionTypes";
import {setToken, apiRequest} from "../utils/ApiUtils";
import {GET_CURRENT_USER} from "../constatns/ApiConstants";

const loginSuccess = authToken => ({
   type: types.LOGIN_SUCCESS,
   authToken,
});

const fetchSessionDataSuccess = user => ({
   type: types.FETCH_SESSION_DATA_SUCCESS,
   user,
});

const fetchSessionData = authToken => async dispatch => {
    const {json: {user}} = await apiRequest.get(GET_CURRENT_USER);

    dispatch(fetchSessionDataSuccess(user));
};

export const initAuth = () => dispatch => {
    const authToken = localStorage.getItem('jwt');

    if(authToken && authToken !== 'undefined') {
        setToken(authToken);
        dispatch(loginSuccess(authToken));
        dispatch(fetchSessionData(authToken));
    }

    dispatch({type: types.APP_LOAD});
};

export const logout = () => dispatch => {
    localStorage.removeItem('jwt');
    dispatch({type: types.LOGOUT});
};