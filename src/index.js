import React from 'react';
import ReactDOM from 'react-dom';

import * as serviceWorker from './serviceWorker';
import {AppContainer} from "react-hot-loader";
import {Provider} from "react-redux";

import {Router} from "react-router-dom";
import {createBrowserHistory} from "history";

import RootContainer from "./containers/RootContainer";

import configureStore from "./store/configureStore";

const render = (Component) => {
    ReactDOM.render(
        <AppContainer>
            <Provider store={configureStore()}>
                <Router history={createBrowserHistory()}>
                    <Component/>
                </Router>
            </Provider>
        </AppContainer>,
        document.getElementById('root')
    )
};

render(RootContainer);

if (module.hot) {
    module.hot.accept('./containers/RootContainer', () => {
        render(RootContainer);
    });
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
