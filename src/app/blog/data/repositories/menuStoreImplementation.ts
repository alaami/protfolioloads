import { useCallback } from "react";
import type { MenuStore } from "../../domain/repositories/menuStore"; 
import { getMenus } from "../datasources/menuAPIService";


const useMenuStoreImplementation= ():MenuStore => {
const loadInitialMenus=
    (locale:string) =>
      getMenus(locale).then(menu=> 
         menu
        );
   // getMenusAction(locale)(dispatch),

return {
loadInitialMenus,
};
};
export { useMenuStoreImplementation };