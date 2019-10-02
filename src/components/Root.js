import React, {Component} from "react";
import {Route, Switch} from "react-router-dom";
import PropTypes from "prop-types";

import UsersContainer from "../containers/UsersContainer";
import HomeContainer from "../containers/HomeContainer";

class Root extends Component {

    static propTypes = {
        initAuth: PropTypes.func.isRequired,
    };

    componentDidMount() {
        const {initAuth} = this.props;

        initAuth();
    }

    render() {
        // const {isFetching, data} = this.props;
        //
        // if(isFetching || !data) {
        //     return (<div>Загрузка</div>)
        // }

        return (
            <div className="main">
                <Switch>
                    <Route path="/users" component={UsersContainer}/>
                    <Route path="/" component={HomeContainer}/>
                </Switch>
            </div>
        )
    }
}

export default Root;