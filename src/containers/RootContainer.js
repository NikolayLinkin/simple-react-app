import React from "react";
import {connect} from "react-redux";
import Root from "../components/Root"

import {initAuth} from "../actions/SessionActions";
import {appLoad} from "../selectors/commonSelectors";

const RootContainer = props => <Root {...props}/>;

const mapStateProps = state => ({
    appLoad: appLoad(state),
});

export default connect(mapStateProps, {
    initAuth,
})(RootContainer);