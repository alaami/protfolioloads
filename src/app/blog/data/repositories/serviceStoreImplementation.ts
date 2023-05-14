
import type { ServiceStore } from "../../domain/repositories/serviceStore"; 
import { getServiceDetails, getServices } from "../datasources/serviceAPIService";

const useServicesStoreImplementation= ():ServiceStore => {
    
const getServicesRepo=
    (locale:string) =>getServices(locale).then(services=>services);

const getServiceRepo=
    (slug: string) =>getServiceDetails(slug);

return {
    getServicesRepo,
    getServiceRepo,
};
};
export { useServicesStoreImplementation };
