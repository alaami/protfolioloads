import type { Menus } from "../entities/menuEntity";
interface MenuStore{
    //Action
    //loadInitialMenus(locale:string): Promise<Menus>; 
    loadInitialMenus(locale:string): Promise<Menus>; 
}
export type {MenuStore}