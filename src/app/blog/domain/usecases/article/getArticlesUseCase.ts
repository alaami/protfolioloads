import type { ArticleStore } from "../../repositories/articleStore";


type GetArticlesStore= Pick <ArticleStore, "getArticles">;

const getArticlesUseCase= (store: GetArticlesStore,currentPage:number,pageSize:number)=>{
    store.getArticles(currentPage,pageSize);
}

export {getArticlesUseCase};