import type { MenuStore } from "../repositories/menuStore";


type GetMenuStore= Pick <MenuStore, "loadInitialMenus">;

const getMenusUseCase= (store: GetMenuStore)=>{
    store.loadInitialMenus();
};

export {getMenusUseCase};