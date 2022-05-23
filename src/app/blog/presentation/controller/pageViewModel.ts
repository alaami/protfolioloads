import React from "react";
import type { PageStore } from "../../domain/repositories/pageStore"; 
import { getPageUseCase } from "../../domain/usecases/page/getPageUseCase";

function usePageViewModel (store: PageStore){
    const getPage=React.useCallback(function(pathname: String){
        getPageUseCase({
            loadPage:store.loadPage
        },pathname);
    },
    [store.loadPage]
    );
return {
    page: store.page?.data,
    isLoadingPage: typeof store.page === "undefined" || store.isLoadingPage,
    getPage,
};
}
export{usePageViewModel}