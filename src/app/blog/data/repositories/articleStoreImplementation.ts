import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";

import type { AppRootState } from "../../../../main/data/appStoreImplementation";
import type { ArticleStore } from "../../domain/repositories/articleStore";

import type { ArticleStoreState } from "../redux/articleReducer";

import { getArticleDetailsAction, getArticlesAction, getArticlesByCategoryAction } from "../redux/articleAcitons";

const articlesSelector = (state: AppRootState ) =>state.articles;
const useArticlesStoreImplementation= ():ArticleStore => {
    
const{articles,article, isLoadingArticles, isLoadingSingleArticle, isLoadingArticlesByCategory, categoryArticles}=useSelector<
AppRootState,
ArticleStoreState
> (articlesSelector);

const dispatch= useDispatch();

const getArticles=useCallback(
    (currentPage:Number,pageSize:Number) =>getArticlesAction(currentPage,pageSize)(dispatch),
    [dispatch]
);

const getArticle=useCallback(
    (slug: String) =>getArticleDetailsAction(slug)(dispatch),
    [dispatch]
);
const getArticlesByCategory=useCallback(
    (slug: String) =>getArticlesByCategoryAction(slug)(dispatch),
    [dispatch]
);
return {
articles,
article,
categoryArticles,
isLoadingArticles,
isLoadingSingleArticle,
isLoadingArticlesByCategory,
getArticles,
getArticle,
getArticlesByCategory,
};
};
export { useArticlesStoreImplementation };
