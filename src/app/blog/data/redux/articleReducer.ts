import type { AnyAction } from "redux";
import type { ArticleStore } from "../../domain/repositories/articleStore";
import * as actionTypes from "../redux/articleActionTypes"

type ArticleStoreState = Omit<ArticleStore,"loadInitialArticles" | "getArticle" | "getArticlesByCategory">

const INITIAL_STATE: ArticleStoreState = {
    articles: undefined,
    article: undefined,
    categoryArticles:undefined,
    isLoadingArticles: false,
    isLoadingSingleArticle: false,
    isLoadingArticlesByCategory: false,
  };

  const articleReducer= (state: ArticleStoreState= INITIAL_STATE, action :AnyAction)=>{
    switch (action.type){
        case actionTypes.GET_ARTICLES:
            return {...state, isLoadingArticles:true};
        case actionTypes.GET_ARTICLE_DETAILS:
            return {...state, isLoadingSingleArticle:true};
        case actionTypes.GET_ARTICLES_SUCCESS:
            return {...state, isLoadingArticles:false, articles:action.articles};
        case actionTypes.GET_ARTICLE_DETAILS_SUCCESS:
            return {...state, isLoadingSingleArticle:false, article:action.article};
        case actionTypes.GET_ARTICLES_ByCategory:
            return {...state, isLoadingArticlesByCategory:true};
        case actionTypes.GET_ARTICLES_ByCategory_SUCCESS:
            return {...state, isLoadingArticlesByCategory:false, categoryArticles:action.articles};
        default:
            return state;
    }
  };

  export {articleReducer}
  export type {ArticleStoreState};