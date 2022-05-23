import type { ArticleStore } from "../../repositories/articleStore";
//import { slug } from "../../../data/models/articleModel";

type GetArticlesStore= Pick <ArticleStore, "getArticle">;

const getArticleDetailsUseCase= (store: GetArticlesStore, slug:string )=>{
    store.getArticle(slug);
};

export {getArticleDetailsUseCase}