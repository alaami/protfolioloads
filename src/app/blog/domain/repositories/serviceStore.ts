import type { Service, Services } from "../entities/serviceEntity";
interface ServiceStore{
    // State
    services: Services | undefined;
    service: Services | undefined;
    isLoadingServices: boolean;
    isLoadingSingleService: boolean;

    //Action
    getServices(locale: string): Promise<Services>;
    getService(slug: string) : Promise<Services>;
}
export {ServiceStore}