import React from "react";
import PropTypes from "prop-types";


const propTypes = {
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
};

const User = ({firstName, lastName, avatar, id}) =>
    (
        <div className="user" onClick={() => {}}>
            <img src={avatar} alt=""/><br/>
            First Name: {firstName}<br/>
            Last Name: {lastName}<br/>
        </div>
    );

User.propTypes = propTypes;

export default User;