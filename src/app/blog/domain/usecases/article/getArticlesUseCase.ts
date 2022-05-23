import type { ArticleStore } from "../../repositories/articleStore";


type GetArticlesStore= Pick <ArticleStore, "loadInitialArticles">;

const getArticlesUseCase= (store: GetArticlesStore)=>{
    store.loadInitialArticles();
}

export {getArticlesUseCase};