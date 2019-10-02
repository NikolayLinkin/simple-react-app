import * as types from "../constatns/ActionTypes";
import {GET_USERS} from "../constatns/ApiConstants";
import {callApi} from "../utils/ApiUtils";

const fetchUsersReq = () => ({
    type: types.FETCH_USERS_REQ,
    isFetching: true,
});

const fetchUsersError = error => ({
    type: types.FETCH_USERS_ERROR,
    isFetching: false,
    error,
});

const fetchUsersSuccess = users => ({
    type: types.FETCH_USERS_SUCCESS,
    users,
});

export const fetchUsers = (page=1) => async dispatch => {
    dispatch(fetchUsersReq());

    const {json, error} = await callApi(GET_USERS(page));

    if(error) {
        dispatch(fetchUsersError(error));
        return false;
    }

    dispatch(fetchUsersSuccess(json));
};

