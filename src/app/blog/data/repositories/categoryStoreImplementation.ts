import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";

import type { AppRootState } from "../../../../main/data/appStoreImplementation";
import type { CategoryStore } from "../../domain/repositories/categoryStore"; 

import type { CategoryStoreState } from "../redux/category/categoryReducer";

import { getCategoriesAction } from "../redux/category/categoryAcitons";

const categoriesSelector = (state: AppRootState ) =>state.categories;

const useCategoryStoreImplementation= ():CategoryStore => {
    
const{categories, isLoadingCategories}=useSelector<
AppRootState,
CategoryStoreState
> (categoriesSelector);

const dispatch= useDispatch();

const loadInitialCategories=useCallback(
    () =>getCategoriesAction()(dispatch),
    [dispatch]
);
return {
categories,
isLoadingCategories,
loadInitialCategories,
};
};
export { useCategoryStoreImplementation };