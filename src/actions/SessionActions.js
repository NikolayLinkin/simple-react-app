import * as types from "../constatns/ActionTypes";
import {callApi} from "../utils/ApiUtils";
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
    const options = {headers: {'authorization': `Token ${authToken}`}};

    const {json: {user}} = await callApi(GET_CURRENT_USER, options);

    dispatch(fetchSessionDataSuccess(user));
};

export const initAuth = () => dispatch => {
    const authToken = localStorage.getItem('jwt');

    if(authToken) {
        dispatch(loginSuccess(authToken));
        dispatch(fetchSessionData(authToken));
    }
};

export const login = () => dispatch => {
      // const {json} = await callApi();
    localStorage.setItem('jwt', '');
};

export const logout = () => dispatch => {
    localStorage.removeItem('jwt');
    dispatch({type: types.LOGOUT});
};