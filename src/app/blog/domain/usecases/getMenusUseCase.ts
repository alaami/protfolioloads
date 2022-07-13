import type { MenuStore } from "../repositories/menuStore";


type GetMenuStore= Pick <MenuStore, "loadInitialMenus">;

const getMenusUseCase= (store: GetMenuStore,locale:string)=>{
    store.loadInitialMenus(locale);
};

export {getMenusUseCase};