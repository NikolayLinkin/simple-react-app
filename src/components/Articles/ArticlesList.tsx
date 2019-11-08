import React, {FC} from "react";
import {IArticles} from "../../interfaces/ArticlesInterface";
import ArticlePreview from "./ArticlePreview";

const ArticlesList: FC<IArticles> = ({articles}: IArticles) => {
    return (
        <>
            {articles.map(article =>
                <ArticlePreview key={article.createdAt}
                                {...article}
                />
            )}
        </>
    );
};

export default ArticlesList;