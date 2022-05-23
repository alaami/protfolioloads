import React from "react";
import type { ArticleStore } from "../../domain/repositories/articleStore";
import { getArticlesUseCase } from "../../domain/usecases/article/getArticlesUseCase";
import {getArticleDetailsUseCase} from "../../domain/usecases/article/getArticleDetailsUseCase";
import {getArticlesByCategoryUseCase} from "../../domain/usecases/article/getArticlesByCategoryUseCase";

function useArticlesViewModel (store: ArticleStore){
    const getArticles=React.useCallback(function(){
        getArticlesUseCase({
            loadInitialArticles:store.loadInitialArticles,
        });
    },
    [store.loadInitialArticles]
    );

    const getArticleDetails=React.useCallback(function(slug: string){
        getArticleDetailsUseCase ({
            getArticle:store.getArticle
        },slug);
    },
    [store.getArticle]
    );

    const getArticlesByCategory=React.useCallback(function(slug: string){
        getArticlesByCategoryUseCase({
            getArticlesByCategory:store.getArticlesByCategory,
        },slug);
    },
    [store.getArticlesByCategory]
    );
return {
    articles: store.articles?.data,
    article:store.article?.data,
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