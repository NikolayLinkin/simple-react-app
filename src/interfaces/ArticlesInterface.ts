export interface IArticles {
    articles: IArticle[]
}

export interface IArticle {
    author: IArticleAuthor,
    createdAt: string,
    favoriteCount: number,
    slug: string,
    title: string,
    description: string,
    tagList: string[],
    toggleFavorite(): void,
}

interface IArticleAuthor {
    image: string,
    username: string,
}