import type { Categories } from "../entities/categoryEntity";
interface CategoryStore{
    // State
    categories: Categories | undefined;
    isLoadingCategories: boolean;

    //Action
    loadInitialCategories(): Promise<Categories>; 
}
export {CategoryStore}