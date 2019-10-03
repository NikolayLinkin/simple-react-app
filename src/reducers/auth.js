import * as types from "../constatns/ActionTypes";

const initialState = {
    isFetching: false,
    errors: {},
};

const auth = (state=initialState, action) => {
    switch(action.type) {
        case types.LOGOUT: {
            return {
                ...initialState,
            };
        }

        case types.FETCH_LOGIN_REQ:
        case types.FETCH_REGISTER_REQ: {
            return {
                ...state,
                isFetching: true,
            }
        }

        case types.FETCH_LOGIN_ERROR:
        case types.FETCH_REGISTER_ERROR: {
            return {
                ...state,
                isFetching: false,
                errors: action.errors,
            }
        }

        default: return state;
    }
};

export default auth;