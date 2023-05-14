import { Projects } from "../entities/projectEntity";
interface ProjectStore{
    // State
    //Action
    getProjectsAll(locale: string): Promise<Projects>;
    getProject(slug: string,locale: string) : Promise<Projects>;
}
export {ProjectStore}