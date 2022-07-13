import { getMenus } from "../../datasources/menuAPIService";
import * as actionTypes from "./menuActionTypes"
const getMenusAction =(locale:String)=> (dispatch:any)=>{
dispatch({type:actionTypes.GET_MENUS});

return getMenus(locale).then((menus)=>{
    dispatch({type: actionTypes.GET_MENUS_SUCCESS, menus});
    return menus;
});
};
export {getMenusAction}