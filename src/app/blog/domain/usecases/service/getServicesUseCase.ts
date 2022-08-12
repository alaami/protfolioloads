import type { ServiceStore } from "../../repositories/serviceStore";


type GetServiceStore= Pick <ServiceStore, "getServices">;

const getServicesUseCase= (store: GetServiceStore, locale:string)=>{
    store.getServices(locale);
}

export {getServicesUseCase};