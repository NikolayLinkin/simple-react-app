import React from "react";
import PropTypes from "prop-types";
import User from "./User";

const propTypes = {
    users: PropTypes.array.isRequired,
};

const UsersList = ({users}) =>
    (users.map(user => <User {...user}/>));

UsersList.propTypes = propTypes;
export default UsersList;