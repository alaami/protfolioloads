import { Menus } from "../entities/menuEntity";
import type { MenuStore } from "../repositories/menuStore";


type GetMenuStore= Pick <MenuStore, "loadInitialMenus">;

const getMenusUseCase= (store: GetMenuStore,locale:string) =>{
    return store.loadInitialMenus(locale);
};

export {getMenusUseCase};