import React from "react";
import Header from "../components/Header";
import {connect} from "react-redux";

import {loggedIn, getCurrentUser} from "../selectors/commonSelectors";
import {logout} from "../actions/SessionActions";

const HeaderContainer = props => <Header {...props}/>;

const mapStateToProps = state => {
    return {
        loggedIn: loggedIn(state),
        currentUser: getCurrentUser(state),
    }
};

export default connect(mapStateToProps,{
    logout,
})(HeaderContainer);