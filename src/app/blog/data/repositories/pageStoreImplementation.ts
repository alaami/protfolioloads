import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";

import type { AppRootState } from "../../../../main/data/appStoreImplementation";
import type { PageStore } from "../../domain/repositories/pageStore"; 

import type { PageStoreState } from "../redux/page/pageReducer";

import { getPageAction, resetPageStoreAction } from "../redux/page/pageAcitons";
import { getPage } from "../datasources/pageAPIService";



const usePageStoreImplementation= ():PageStore => {
    
const loadPage=
    (pathname: string,locale:string) =>getPage(pathname,locale).then(page=>page);
    
/* const resetPageStore=useCallback(
    () =>resetPageStoreAction()(dispatch),
    [dispatch]
); */

return {
loadPage
};
};
export { usePageStoreImplementation };