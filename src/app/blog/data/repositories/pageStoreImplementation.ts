import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";

import type { AppRootState } from "../../../../main/data/appStoreImplementation";
import type { PageStore } from "../../domain/repositories/pageStore"; 

import type { PageStoreState } from "../redux/page/pageReducer";

import { getPageAction, resetPageStoreAction } from "../redux/page/pageAcitons";

const pageSelector = (state: AppRootState ) =>state.page;

const usePageStoreImplementation= ():PageStore => {
    
const{page, isLoadingPage}=useSelector<
AppRootState,
PageStoreState
> (pageSelector);

const dispatch= useDispatch();

const loadPage=useCallback(
    (pathname: String,locale:String) =>getPageAction(pathname,locale)(dispatch),
    [dispatch]
);
const resetPageStore=useCallback(
    () =>resetPageStoreAction()(dispatch),
    [dispatch]
);

return {
page,
isLoadingPage,
loadPage,
resetPageStore,
};
};
export { usePageStoreImplementation };