import { useCallback } from "react";
import { useDispatch, useSelector} from "react-redux";

import type { AppRootState } from "../../../../main/data/appStoreImplementation";
import type { MenuStore } from "../../domain/repositories/menuStore"; 

import type { MenuStoreStoreState } from "../redux/menu/menuReducer";

import { getMenusAction } from "../redux/menu/menuAcitons";

const menusSelector = (state: AppRootState ) =>state.menus;

const useMenuStoreImplementation= ():MenuStore => {
    
const{menu, isLoadingMenus}=useSelector<
AppRootState,
MenuStoreStoreState
> (menusSelector);

const dispatch= useDispatch();

const loadInitialMenus=useCallback(
    (locale:string) =>getMenusAction(locale)(dispatch),
    [dispatch]
);
return {
menu,
isLoadingMenus,
loadInitialMenus,
};
};
export { useMenuStoreImplementation };