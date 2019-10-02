import React from "react";
import {connect} from "react-redux";
import Users from "../components/Users";

import {
    getUsersList,
    usersFetching,
} from "../selectors/commonSelectors";
import {
    fetchUsers,
} from "../actions/UsersActions";

const UsersContainer = props => <Users {...props}/>;

const mapStateToProps = state => {
    return {
        usersFetching: usersFetching(state),
        users: getUsersList(state),
    }
};

export default connect(mapStateToProps, {
    fetchUsers,
})(UsersContainer)