import React from "react";
import {connect} from "react-redux";
import Root from "../components/Root"

import {initAuth} from "../actions/SessionActions";

const RootContainer = props => <Root {...props}/>;

const mapStateProps = state => ({

});

export default connect(mapStateProps, {
    initAuth,
})(RootContainer);