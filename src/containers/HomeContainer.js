import React from "react";
import Home from "../components/Home";
import {connect} from "react-redux";

import {fetchArticles} from "../actions/ArticlesActions";
import {loggedIn} from "../selectors/commonSelectors";
import {
    getArticlesAll,
    getArticlesCount,
    articlesFetching,
} from "../selectors/commonSelectors";

const HomeContainer = props => <Home {...props}/>;

const mapStateToProps = state => {
    return {
        loggedIn: loggedIn(state),
        articlesAll: getArticlesAll(state),
        articlesCount: getArticlesCount(state),
        articlesFetching: articlesFetching(state),
    }
};

export default connect(mapStateToProps,{
    fetchArticles,
})(HomeContainer);