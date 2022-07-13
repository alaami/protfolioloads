import type { AnyAction } from "redux";
import type { MenuStore } from "../../../domain/repositories/menuStore"; 
import * as actionTypes from "./menuActionTypes"

type MenuStoreStoreState = Omit<MenuStore,"loadInitialMenus">

const INITIAL_STATE: MenuStoreStoreState = {
    menu: undefined,
    isLoadingMenus: false
  };

  const menuReducer= (state: MenuStoreStoreState= INITIAL_STATE, action :AnyAction)=>{
    switch (action.type){
        case actionTypes.GET_MENUS:
            return {...state, isLoadingMenus:true};
        case actionTypes.GET_MENUS_SUCCESS:
            return {...state, isLoadingMenus:false, menu:action.menus.data};
        default:
            return state;
    }
  };

  export {menuReducer}
  export type {MenuStoreStoreState};