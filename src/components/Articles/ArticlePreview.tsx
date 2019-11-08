import React, {FC} from "react";
import {Link} from "react-router-dom";
import {IArticle} from "../../interfaces/ArticlesInterface";

import ArticleFavoriteBtn from "./ArticleFavoriteBtn";

const ArticlePreview: FC<IArticle> =
    ({
         author,
         createdAt,
         favoriteCount,
         slug,
         title,
         description,
         tagList,
         toggleFavorite,
     }: IArticle) => {

        return (
            <div className="article">
                <div className="article__author">
                    <Link className="article__author__link" to={`/${author.username}`}>
                        <img className="article__author__img"
                             src={author.image} alt=""
                        />
                        <div className="article__author__name">
                            {author.username}
                        </div>
                    </Link>
                </div>
                <div className="article__date">
                    {new Date(createdAt).toDateString()}
                </div>
                <ArticleFavoriteBtn toggleFavorite={toggleFavorite}
                                    favoriteCount={favoriteCount}
                />
                <div className="article__main">
                    <Link to={`/article/${slug}`} className="article__main__link">
                        <h2 className="article__title">
                            {title}
                        </h2>
                        <div className="article__description">
                            {description}
                        </div>

                        <div className="article__tags">
                            {tagList.map(tag =>
                                <span key={tag} className="article__tag">{tag}</span>
                            )}
                        </div>
                    </Link>
                </div>
            </div>
        );
    };

export default ArticlePreview;