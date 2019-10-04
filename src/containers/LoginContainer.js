import React from "react";
import {connect} from "react-redux";
import Login from "../components/Login";

import {fetchLogin, cleanLogin} from "../actions/AuthActions";

const LoginContainer = props => <Login {...props}/>;

const mapStateToProps = state => {
  return {

  };
};

export default connect(mapStateToProps, {
    fetchLogin,
    cleanLogin,
})(LoginContainer);
