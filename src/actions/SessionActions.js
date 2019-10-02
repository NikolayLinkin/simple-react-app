import * as types from "../constatns/ActionTypes";

const loginSuccess = authToken => ({
   type: types.LOGIN_SUCCESS,
   authToken,
});

const fetchSessionData = authToken => dispatch => {

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
    //TODO: redirect
    dispatch({type: types.LOGOUT});
};