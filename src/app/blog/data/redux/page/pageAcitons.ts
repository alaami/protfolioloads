import { getPage } from "../../datasources/pageAPIService";
import * as actionTypes from "./pageActionTypes"
const getPageAction =(pathname: string,locale:string)=> (dispatch:any)=>{
dispatch({type:actionTypes.GET_PAGE});

return getPage(pathname,locale).then((page)=>{
    dispatch({type: actionTypes.GET_PAGE_SUCCESS, page});
    return page;
});
};
const resetPageStoreAction =()=> (dispatch:any)=>{
    dispatch({type:actionTypes.RESET_PAGE});
    };
export {getPageAction,resetPageStoreAction}