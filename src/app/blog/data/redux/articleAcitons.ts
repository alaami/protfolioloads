import { getArticles, getArticleDetails, getArticlesByCategory } from '../datasources/articleAPIService';
import * as actionTypes from "../redux/articleActionTypes"
const getArticlesAction =(currentPage:number, pageSize:number)=> (dispatch:any)=>{
dispatch({type:actionTypes.GET_ARTICLES});

return getArticles(currentPage,pageSize).then((articles)=>{
    dispatch({type: actionTypes.GET_ARTICLES_SUCCESS, articles});
    return articles;
});
};
const getArticleDetailsAction =(slug : string)=> (dispatch:any)=>{
    dispatch({type:actionTypes.GET_ARTICLE_DETAILS});
    
    return getArticleDetails(slug).then((article)=>{
        dispatch({type: actionTypes.GET_ARTICLE_DETAILS_SUCCESS, article});
        return article;
    });
};
const getArticlesByCategoryAction =(slug : string)=> (dispatch:any)=>{
    dispatch({type:actionTypes.GET_ARTICLES_ByCategory});
    
    return getArticlesByCategory(slug).then((articles)=>{
        dispatch({type: actionTypes.GET_ARTICLES_ByCategory_SUCCESS, articles});
        return articles;
    });
    };

export {getArticlesAction,getArticleDetailsAction, getArticlesByCategoryAction}