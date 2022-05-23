import type { ArticleStore } from "../../repositories/articleStore";


type GetArticlesStore= Pick <ArticleStore, "getArticlesByCategory">;

const getArticlesByCategoryUseCase= (store: GetArticlesStore,slug:string)=>{
    store.getArticlesByCategory(slug);
}

export {getArticlesByCategoryUseCase};