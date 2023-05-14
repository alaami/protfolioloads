import type { ServiceStore } from "../../repositories/serviceStore";


type GetServiceStore= Pick <ServiceStore, "getServicesRepo">;

const getServicesUseCase= (store: GetServiceStore, locale:string)=>{
   return store.getServicesRepo(locale);
}

export {getServicesUseCase};