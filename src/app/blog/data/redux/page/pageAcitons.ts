import { getPage } from "../../datasources/pageAPIService";
import * as actionTypes from "./pageActionTypes"
const getPageAction =(pathname: String)=> (dispatch:any)=>{
dispatch({type:actionTypes.GET_PAGE});

return getPage(pathname).then((page)=>{
    dispatch({type: actionTypes.GET_PAGE_SUCCESS, page});
    return page;
});
};
export {getPageAction}