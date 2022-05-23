import { useCallback } from "react";
import type { ServiceStore } from "../../domain/repositories/serviceStore";
import { getServicesUseCase } from "../../domain/usecases/service/getServicesUseCase";
import { getServiceDetailsUseCase } from "../../domain/usecases/service/getServiceDetailsUseCase";

function useServiceViewModel (store: ServiceStore){
    const getServices=useCallback(function(){
        getServicesUseCase({
            getServices:store.getServices,
        });
    },
    [store.getServices]
    );

    const getServiceDetails=useCallback(function(slug: string){
        getServiceDetailsUseCase ({
            getService:store.getService,
        },slug);
    },
    [store.getService]
    );
return {
    services: store.services?.data,
    service:store.service?.data,
    isLoadingServices: typeof store.services === "undefined" || store.isLoadingServices,
    isLoadingSingleService: typeof store.service === "undefined" || store.isLoadingSingleService,
    getServices,
    getServiceDetails,
};
}
export{useServiceViewModel}