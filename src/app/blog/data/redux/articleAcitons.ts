import { getArticles, getArticleDetails, getArticlesByCategory } from '../datasources/articleAPIService';
import * as actionTypes from "../redux/articleActionTypes"
const getArticlesAction =()=> (dispatch:any)=>{
dispatch({type:actionTypes.GET_ARTICLES});

return getArticles().then((articles)=>{
    dispatch({type: actionTypes.GET_ARTICLES_SUCCESS, articles});
    return articles;
});
};
const getArticleDetailsAction =(slug : String)=> (dispatch:any)=>{
    dispatch({type:actionTypes.GET_ARTICLE_DETAILS});
    
    return getArticleDetails(slug).then((article)=>{
        dispatch({type: actionTypes.GET_ARTICLE_DETAILS_SUCCESS, article});
        return article;
    });
};
const getArticlesByCategoryAction =(slug : String)=> (dispatch:any)=>{
    dispatch({type:actionTypes.GET_ARTICLES_ByCategory});
    
    return getArticlesByCategory(slug).then((articles)=>{
        dispatch({type: actionTypes.GET_ARTICLES_ByCategory_SUCCESS, articles});
        return articles;
    });
    };

export {getArticlesAction,getArticleDetailsAction, getArticlesByCategoryAction}