import type { ServiceStore } from "../../repositories/serviceStore";


type GetServiceStore= Pick <ServiceStore, "getServices">;

const getServicesUseCase= (store: GetServiceStore)=>{
    store.getServices();
}

export {getServicesUseCase};