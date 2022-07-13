import { useCallback } from "react";
import type { ArticleStore } from "../../domain/repositories/articleStore";
import { getArticlesUseCase } from "../../domain/usecases/article/getArticlesUseCase";
import {getArticleDetailsUseCase} from "../../domain/usecases/article/getArticleDetailsUseCase";
import {getArticlesByCategoryUseCase} from "../../domain/usecases/article/getArticlesByCategoryUseCase";

function useArticlesViewModel (store: ArticleStore){
    const getArticles=useCallback(function(currentPage:Number,pageSize:Number){
        getArticlesUseCase({
            getArticles:store.getArticles,
        },currentPage,pageSize);
    },
    [store.getArticles]
    );

    const getArticleDetails=useCallback(function(slug: string){
        getArticleDetailsUseCase ({
            getArticle:store.getArticle
        },slug);
    },
    [store.getArticle]
    );

    const getArticlesByCategory=useCallback(function(slug: string){
        getArticlesByCategoryUseCase({
            getArticlesByCategory:store.getArticlesByCategory,
        },slug);
    },
    [store.getArticlesByCategory]
    );
return {
    articles: store.articles?.data,
    article:store.article?.data,
    articleMeta:store.articles?.meta,
    categoryArticles: store.categoryArticles?.data,
    isLoadingArticles: typeof store.articles === "undefined" || store.isLoadingArticles,
    isLoadingSingleArticle: typeof store.article === "undefined" || store.isLoadingSingleArticle,
    isLoadingSingleArticleByCategory: typeof store.categoryArticles === "undefined" || store.isLoadingArticlesByCategory,
    getArticles,
    getArticleDetails,
    getArticlesByCategory
};
}
export{useArticlesViewModel}