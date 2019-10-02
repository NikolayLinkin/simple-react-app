import * as types from "../constatns/ActionTypes";

const initialState = {
    isFetching: false,
    data: [],
};

const users = (state = initialState, action) => {
    switch (action.type) {
        case (types.FETCH_USERS_REQ): {
            return {
                ...state,
                isFetching: true,
            }
        }

        case(types.FETCH_USERS_ERROR): {
            return {
                ...state,
                isFetching: false,
            }
        }

        case(types.FETCH_USERS_SUCCESS): {
            return {
                ...state,
                isFetching: false,
                ...action.users,
            };
        }
        default:
            return state;
    }
};

export default users;