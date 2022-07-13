import type { PageStore } from "../../repositories/pageStore";


type GetPageStore= Pick <PageStore, "loadPage">;

const getPageUseCase= (store: GetPageStore, pathname: string,locale:string)=>{
    store.loadPage(pathname,locale);
};

export {getPageUseCase};