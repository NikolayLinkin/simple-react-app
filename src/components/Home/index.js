import React, {Component} from "react";
import PropTypes from "prop-types";

import HomeTabs from "./Tabs";
import ArticlesList from "../Articles/ArticlesList.tsx";

class Home extends Component {
    static propTypes = {
        fetchArticles: PropTypes.func,
        loggedIn: PropTypes.bool,
        articlesAll: PropTypes.array,
        articlesCount: PropTypes.number,
        articlesFetching: PropTypes.bool,
    };

    constructor(props) {
        super(props);

        this.state = {
            activeTab: props.loggedIn ? 'You Feed' : 'Global Feed',
        };

        this.onClickTab = this.onClickTab.bind(this);
    }

    componentDidMount() {
        const {
            fetchArticles,
            loggedIn,
        } = this.props;

        const tabName = loggedIn ? 'feed' : '';

        fetchArticles(tabName);
    }

    componentWillUnmount() {

    }

    onClickTab(tabName) {
        this.setState(state => ({
            activeTab: tabName,
        }))
    }

    render() {
        const {
            articlesAll,
            articlesCount,
            articlesFetching,
            loggedIn,
        } = this.props;

        const {activeTab} = this.state;

        return (
            <>
                <HomeTabs
                    loggedIn={loggedIn}
                    onTabClick={this.onClickTab}
                    activeTab={activeTab}
                />

                {!articlesFetching ?
                    <ArticlesList
                        articles={articlesAll}
                        articlesCount={articlesCount}
                    />
                    : 'Загрузка...'}
                {/*<div className="catalog">*/}
                {/*    */}
                {/*    {!articlesFetching ? JSON.stringify(articlesAll) : 'Загрузка...'}*/}
                {/*</div>*/}
            </>
        )
    }
}

export default Home;