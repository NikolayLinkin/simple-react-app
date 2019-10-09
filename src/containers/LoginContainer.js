import React from "react";
import {connect} from "react-redux";
import Login from "../components/Login";

import {fetchLogin, cleanLogin} from "../actions/AuthActions";
import {getAuthErrors} from "../selectors/Auth";

const LoginContainer = props => <Login {...props}/>;

const mapStateToProps = state => {
  return {
      errors: getAuthErrors(state),
  };
};

export default connect(mapStateToProps, {
    fetchLogin,
    cleanLogin,
})(LoginContainer);

