import type { Menus } from "../entities/menuEntity";
interface MenuStore{
    // State
    menu: Menus | undefined;
    isLoadingMenus: boolean;

    //Action
    loadInitialMenus(locale:String): Promise<Menus>; 
}
export {MenuStore}