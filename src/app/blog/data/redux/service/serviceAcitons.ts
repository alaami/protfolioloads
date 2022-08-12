import { getServices, getServiceDetails } from "../../datasources/serviceAPIService"; 
import * as actionTypes from "../service/serviceActionTypes"
const getServicesAction =(locale:string)=> (dispatch:any)=>{
dispatch({type:actionTypes.GET_SERVICES});

return getServices(locale).then((services)=>{
    dispatch({type: actionTypes.GET_SERVICES_SUCCESS, services});
    return services;
});
};
const getServiceDetailsAction =(slug : string)=> (dispatch:any)=>{
    dispatch({type:actionTypes.GET_SERVICE_DETAILS});
    
    return getServiceDetails(slug).then((service)=>{
        dispatch({type: actionTypes.GET_SERVICE_DETAILS_SUCCESS, service});
        return service;
    });
};


export {getServicesAction,getServiceDetailsAction }