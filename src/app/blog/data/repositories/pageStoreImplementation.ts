import React from "react";
import { useDispatch, useSelector } from "react-redux";

import type { AppRootState } from "../../../../main/data/appStoreImplementation";
import type { PageStore } from "../../domain/repositories/pageStore"; 

import type { PageStoreState } from "../redux/page/pageReducer";

import { getPageAction } from "../redux/page/pageAcitons";

const pageSelector = (state: AppRootState ) =>state.page;

const usePageStoreImplementation= ():PageStore => {
    
const{page, isLoadingPage}=useSelector<
AppRootState,
PageStoreState
> (pageSelector);

const dispatch= useDispatch();

const loadPage=React.useCallback(
    (pathname: String) =>getPageAction(pathname)(dispatch),
    [dispatch]
);
return {
page,
isLoadingPage,
loadPage,
};
};
export { usePageStoreImplementation };