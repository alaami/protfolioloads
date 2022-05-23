import type { AnyAction } from "redux";
import type { PageStore } from "../../../domain/repositories/pageStore"; 
import * as actionTypes from "./pageActionTypes"

type PageStoreState = Omit<PageStore,"loadPage">

const INITIAL_STATE: PageStoreState = {
    page: undefined,
    isLoadingPage: false
  };

  const pageReducer= (state: PageStoreState= INITIAL_STATE, action :AnyAction)=>{
    switch (action.type){
        case actionTypes.GET_PAGE:
            return {...state, isLoadingPage:true};
        case actionTypes.GET_PAGE_SUCCESS:
            return {...state, isLoadingPage:false, page:action.page};
        default:
            return state;
    }
  };

  export {pageReducer}
  export type {PageStoreState};