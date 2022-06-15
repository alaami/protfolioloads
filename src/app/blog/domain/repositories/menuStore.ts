import type { PrimaryMenu } from "../entities/menuEntity";
interface MenuStore{
    // State
    menu: PrimaryMenu | undefined;
    isLoadingMenus: boolean;

    //Action
    loadInitialMenus(): Promise<PrimaryMenu>; 
}
export {MenuStore}