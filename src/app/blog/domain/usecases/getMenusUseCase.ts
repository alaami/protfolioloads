import type { MenuStore } from "../repositories/menuStore";


type GetMenuStore= Pick <MenuStore, "loadInitialMenus">;

const getMenusUseCase= (store: GetMenuStore,locale:String)=>{
    store.loadInitialMenus(locale);
};

export {getMenusUseCase};