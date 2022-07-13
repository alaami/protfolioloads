import { useCallback } from "react";
import type { MenuStore } from "../../domain/repositories/menuStore"; 
import { getMenusUseCase } from "../../domain/usecases/getMenusUseCase";

function useMenuViewModel (store: MenuStore){
    const getMenus=useCallback(function(locale:string){
        getMenusUseCase({
            loadInitialMenus:store.loadInitialMenus
        }, locale);
    },
    [store.loadInitialMenus]
    );
return {
    menu: store.menu,
    isLoadingMenus: typeof store.menu === "undefined" || store.isLoadingMenus,
    getMenus,
};
}
export{useMenuViewModel}