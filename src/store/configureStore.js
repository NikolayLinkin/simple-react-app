import {createStore, applyMiddleware} from "redux";
import thunkMiddleware from "redux-thunk";
import {composeWithDevTools} from "redux-devtools-extension/developmentOnly";
import rootReducer from "../reducers";


export default function configureStore(initialState) {
    const middlewares = [thunkMiddleware];
    const middlewareEnhancer = applyMiddleware(...middlewares);
    const enhancer = [middlewareEnhancer];
    const composedEnhancers = composeWithDevTools(...enhancer);

    const store = createStore(rootReducer, initialState, composedEnhancers);

    if(module.hot) {
        module.hot.accept('../reducers', () => {
           store.replaceReducer(rootReducer);
        });
    }

    return store;
}