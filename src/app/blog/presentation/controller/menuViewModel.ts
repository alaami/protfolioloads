import { useCallback } from "react";
import { Menus } from "../../domain/entities/menuEntity";
import type { MenuStore } from "../../domain/repositories/menuStore"; 
import { getMenusUseCase } from "../../domain/usecases/getMenusUseCase";

 function useMenuViewModel (store: MenuStore)  {
    
    const getMenus =async function(locale:string){
       return getMenusUseCase({
            loadInitialMenus: store.loadInitialMenus
        }, locale);
    };
return {
    getMenus,
};
}
export{useMenuViewModel}