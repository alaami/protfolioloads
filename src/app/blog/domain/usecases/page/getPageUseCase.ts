import type { PageStore } from "../../repositories/pageStore";


type GetPageStore= Pick <PageStore, "loadPage">;

const getPageUseCase= (store: GetPageStore, pathname: String,locale:String)=>{
    store.loadPage(pathname,locale);
};

export {getPageUseCase};