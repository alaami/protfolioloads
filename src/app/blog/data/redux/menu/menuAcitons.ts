import { getMenus } from "../../datasources/menuAPIService";
import * as actionTypes from "./menuActionTypes"
const getMenusAction =()=> (dispatch:any)=>{
dispatch({type:actionTypes.GET_MENUS});

return getMenus().then((menus)=>{
    dispatch({type: actionTypes.GET_MENUS_SUCCESS, menus});
    return menus;
});
};
export {getMenusAction}