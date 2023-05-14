import React, { useCallback } from "react";
import type { PageStore } from "../../domain/repositories/pageStore"; 
import { getPageUseCase } from "../../domain/usecases/page/getPageUseCase";
import { resetPageStoreUseCase } from "../../domain/usecases/page/resetPageStoreUseCase";

function usePageViewModel (store: PageStore){
        
    const getPage=async function(pathname: string,locale:string){
        return getPageUseCase({
            loadPage:store.loadPage
        },pathname,locale);
    };
/*     const resetPageStore=useCallback(function(){
        resetPageStoreUseCase({
            resetPageStore:store.resetPageStore
        });
    },
    [store.resetPageStore]
    ); */
return {
    getPage,
 //   resetPageStore,
};
}
export{usePageViewModel}