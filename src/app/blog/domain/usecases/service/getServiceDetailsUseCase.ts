import type { ServiceStore } from "../../repositories/serviceStore";

type GetServiceStore= Pick <ServiceStore, "getService">;

const getServiceDetailsUseCase= (store: GetServiceStore, slug:string )=>{
    store.getService(slug);
};

export {getServiceDetailsUseCase}