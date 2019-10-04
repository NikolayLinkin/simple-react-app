import React, {Component} from "react";
import PropTypes from "prop-types";

class Home extends Component {
    static propTypes = {

    };

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

    render() {
        return (
            <>
                <div className="catalog"></div>
            </>
        )
    }
}

export default Home;