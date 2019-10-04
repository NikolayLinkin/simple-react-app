import {combineReducers} from "redux";
import session from "./session";
import users from "./users";
import auth from "./auth";
import articles from "./articles";

const rootReducer = combineReducers({
    articles,
    users,
    auth,
    session,
});

export default rootReducer;