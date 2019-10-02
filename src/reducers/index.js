import {combineReducers} from "redux";
import session from "./session";
import users from "./users";
import auth from "./auth";

const rootReducer = combineReducers({
    users,
    auth,
    session,
});

export default rootReducer;