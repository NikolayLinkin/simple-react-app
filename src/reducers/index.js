import {combineReducers} from "redux";
import session from "./session";
import users from "./users";

const rootReducer = combineReducers({
    users,
    session,
});

export default rootReducer;