import type { ServiceStore } from "../../domain/repositories/serviceStore";
import { getServicesUseCase } from "../../domain/usecases/service/getServicesUseCase";
import { getServiceDetailsUseCase } from "../../domain/usecases/service/getServiceDetailsUseCase";

function useServiceViewModel (store: ServiceStore){
    const getServices=function(locale: string){
        return getServicesUseCase({
            getServicesRepo:store.getServicesRepo,
        },locale);
    };
    const getServiceDetails=function(slug: string){
        return getServiceDetailsUseCase ({
            getService:store.getServiceRepo,
        },slug);
    };
return {
    getServices,
    getServiceDetails,
};
}
export{useServiceViewModel}