import type { AnyAction } from "redux";
import type { ServiceStore } from "../../../domain/repositories/serviceStore";
import * as actionTypes from "../service/serviceActionTypes"

type ServiceStoreState = Omit<ServiceStore,"getServices" | "getService">

const INITIAL_STATE: ServiceStoreState = {
    services: undefined,
    service: undefined,
    isLoadingServices: false,
    isLoadingSingleService: false,
  };

  const serviceReducer= (state: ServiceStoreState= INITIAL_STATE, action :AnyAction)=>{
    switch (action.type){
        case actionTypes.GET_SERVICES:
            return {...state, isLoadingServices:true};
        case actionTypes.GET_SERVICE_DETAILS:
            return {...state, isLoadingSingleService:true};
        case actionTypes.GET_SERVICES_SUCCESS:
            return {...state, isLoadingServices:false, services:action.services};
        case actionTypes.GET_SERVICE_DETAILS_SUCCESS:
            return {...state, isLoadingSingleService:false, service:action.service};
        default:
            return state;
    }
  };

  export {serviceReducer}
  export type {ServiceStoreState};