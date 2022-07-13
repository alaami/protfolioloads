import React, { useCallback } from "react";
import type { PageStore } from "../../domain/repositories/pageStore"; 
import { getPageUseCase } from "../../domain/usecases/page/getPageUseCase";
import { resetPageStoreUseCase } from "../../domain/usecases/page/resetPageStoreUseCase";

function usePageViewModel (store: PageStore){
    const getPage=useCallback(function(pathname: string,locale:string){
        getPageUseCase({
            loadPage:store.loadPage
        },pathname,locale);
    },
    [store.loadPage]
    );
    const resetPageStore=useCallback(function(){
        resetPageStoreUseCase({
            resetPageStore:store.resetPageStore
        });
    },
    [store.resetPageStore]
    );
return {
    page: store.page?.data,
    isLoadingPage: typeof store.page === "undefined" || store.isLoadingPage,
    getPage,
    resetPageStore,
};
}
export{usePageViewModel}