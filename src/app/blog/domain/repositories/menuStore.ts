import type { Menus } from "../entities/menuEntity";
interface MenuStore{
    // State
    menu: Menus | undefined;
    isLoadingMenus: boolean;

    //Action
    loadInitialMenus(locale:string): Promise<Menus>; 
}
export {MenuStore}