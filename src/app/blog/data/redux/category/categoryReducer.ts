import type { AnyAction } from "redux";
import type { CategoryStore } from "../../../domain/repositories/categoryStore"; 
import * as actionTypes from "./categoryActionTypes"

type CategoryStoreState = Omit<CategoryStore,"loadInitialCategories">

const INITIAL_STATE: CategoryStoreState = {
    categories: undefined,
    isLoadingCategories: false
  };

  const categoryReducer= (state: CategoryStoreState= INITIAL_STATE, action :AnyAction)=>{
    switch (action.type){
        case actionTypes.GET_CATEGORIES:
            return {...state, isLoadingCategories:true};
        case actionTypes.GET_CATEGORIES_SUCCESS:
            return {...state, isLoadingCategories:false, categories:action.categories};
        default:
            return state;
    }
  };

  export {categoryReducer}
  export type {CategoryStoreState};