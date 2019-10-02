import * as types from "../constatns/ActionTypes";

const initialState = {

};

const auth = (state=initialState, action) => {
    switch(action.type) {
        case(types.LOGOUT): {
            return {
                ...initialState,
            }
        }
        default: return state;
    }
};

export default auth;