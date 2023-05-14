import type { PageStore } from "../../repositories/pageStore";


type GetPageStore= Pick <PageStore, "loadPage">;

const getPageUseCase= (store: GetPageStore, pathname: string,locale:string)=>{
    return store.loadPage(pathname,locale);
};

export {getPageUseCase};