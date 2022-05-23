import type { CategoryStore } from "../repositories/categoryStore";


type GetCategoryStore= Pick <CategoryStore, "loadInitialCategories">;

const getCategoriesUseCase= (store: GetCategoryStore)=>{
    store.loadInitialCategories();
};

export {getCategoriesUseCase};