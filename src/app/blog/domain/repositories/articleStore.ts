import type { Article, Articles } from "../../domain/entities/articleEntity";
interface ArticleStore{
    // State
    articles: Articles | undefined;
    article: Articles | undefined;
    categoryArticles: Articles | undefined;
    isLoadingArticles: boolean;
    isLoadingSingleArticle: boolean;
    isLoadingArticlesByCategory: boolean;

    //Action
    getArticles(currentPage:Number, pageSize:Number): Promise<Articles>;
    getArticle(slug: string) : Promise<Articles>;
    getArticlesByCategory(slug: string): Promise<Articles>;
}
export {ArticleStore}