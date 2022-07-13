import type { ArticleStore } from "../../repositories/articleStore";


type GetArticlesStore= Pick <ArticleStore, "getArticles">;

const getArticlesUseCase= (store: GetArticlesStore,currentPage:Number,pageSize:Number)=>{
    store.getArticles(currentPage,pageSize);
}

export {getArticlesUseCase};