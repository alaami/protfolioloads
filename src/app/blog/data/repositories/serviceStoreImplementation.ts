import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";

import type { AppRootState } from "../../../../main/data/appStoreImplementation";
import type { ServiceStore } from "../../domain/repositories/serviceStore"; 

import type { ServiceStoreState } from "../redux/service/serviceReducer";

import { getServicesAction,getServiceDetailsAction } from "../redux/service/serviceAcitons";

const servicesSelector = (state: AppRootState ) =>state.services;
const useServicesStoreImplementation= ():ServiceStore => {
    
const{services,service, isLoadingServices, isLoadingSingleService }=useSelector<
AppRootState,
ServiceStoreState
> (servicesSelector);

const dispatch= useDispatch();

const getServices=useCallback(
    (locale:string) =>getServicesAction(locale)(dispatch),
    [dispatch]
);

const getService=useCallback(
    (slug: string) =>getServiceDetailsAction(slug)(dispatch),
    [dispatch]
);

return {
services,
service,
isLoadingServices,
isLoadingSingleService,
getServices,
getService,
};
};
export { useServicesStoreImplementation };
