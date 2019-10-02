import React from "react";
import Home from "../components/Home/";
import {connect} from "react-redux";

import {initAuth} from "../actions/SessionActions";

const HomeContainer = props => <Home {...props}/>;

const mapStateToProps = state => {
    return {

    }
};

export default connect(mapStateToProps,{
    initAuth,
})(HomeContainer);