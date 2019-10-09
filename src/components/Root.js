import React, {Component} from "react";
import {Route, Redirect} from "react-router-dom";
import PropTypes from "prop-types";

import HomeContainer from "../containers/HomeContainer";

// import "normalize";
import "../styles/index.scss";
import HeaderContainer from "../containers/HeaderContainer";
import RegisterContainer from "../containers/RegisterContainer";
import LoginContainer from "../containers/LoginContainer";

class Root extends Component {

    static propTypes = {
        initAuth: PropTypes.func.isRequired,
    };

    componentDidMount() {
        const {initAuth} = this.props;

        initAuth();
    }

    render() {
        const {loggedIn, appLoad} = this.props;

        if(appLoad) {
            return (
                <div className="main">
                    <HeaderContainer/>
                    <Route exact path="/" component={HomeContainer}/>
                    <Route path="/register">
                        {!loggedIn ?
                            <RegisterContainer/> :
                            <Redirect to="/settings"/>}
                    </Route>
                    <Route path="/login" component={LoginContainer}/>
                </div>
            )
        }

        return (
            <div>Загрузка</div>
        )
    }
}

export default Root;