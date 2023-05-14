import type { Service, Services } from "../entities/serviceEntity";
interface ServiceStore{
    //Action
    getServicesRepo(locale: string): Promise<Services>;
    getServiceRepo(slug: string) : Promise<Services>;
}
export {ServiceStore}