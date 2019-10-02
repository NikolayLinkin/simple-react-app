import React from "react";
import {connect} from "react-redux";
import Root from "../components/Root"

import {fetchUsers} from "../actions/UsersActions";

const RootContainer = props => <Root {...props}/>;

const mapStateProps = state => ({
    ...state.users,
});

export default connect(mapStateProps, {
    fetchUsers,
})(RootContainer);