import React from "react";
import PropTypes from "prop-types";
import ArticlePreview from "./ArticlePreview";

const propTypes = {
    articlesAll: PropTypes.array.isRequired,
};

const ArticlesList = ({articlesAll}) => {
    return (
        <>
            {articlesAll.map(article =>
                <ArticlePreview key={article.createdAt} article={article}/>
                )}
        </>
    );
};

ArticlesList.propTypes = propTypes;
export default ArticlesList;