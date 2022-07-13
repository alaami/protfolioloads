import { useCallback } from "react";
import type { CategoryStore } from "../../domain/repositories/categoryStore"; 
import { getCategoriesUseCase } from "../../domain/usecases/getCategoriesUseCase";

function useCategoryViewModel (store: CategoryStore){
    const getCtegories=useCallback(function(){
        getCategoriesUseCase({
            loadInitialCategories:store.loadInitialCategories
        });
    },
    [store.loadInitialCategories]
    );
return {
    categories: store.categories?.data,
    isLoadingCategories: typeof store.categories === "undefined" || store.isLoadingCategories,
    getCtegories,
};
}
export{useCategoryViewModel}