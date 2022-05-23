import type { PageStore } from "../../repositories/pageStore";


type GetPageStore= Pick <PageStore, "loadPage">;

const getPageUseCase= (store: GetPageStore, pathname: String)=>{
    store.loadPage(pathname);
};

export {getPageUseCase};