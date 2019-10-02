import React from "react";
import Register from "../components/Register";
import {connect} from "react-redux";

import {getAuthErrors, authFetching} from "../selectors/Auth";

import {fetchRegister} from "../actions/AuthActions";

const RegisterContainer = props => <Register {...props}/>;

const mapStateToProps = state => {
    return {
        errors: getAuthErrors(state),
        isFetching: authFetching(state),
    }
};

export default connect(mapStateToProps, {
    fetchRegister,
})(RegisterContainer);