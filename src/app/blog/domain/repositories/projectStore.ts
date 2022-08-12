import { Projects } from "../entities/projectEntity";
interface ProjectStore{
    // State
    projects: Projects | undefined;
    project: Projects | undefined;
    isLoadingProjects: boolean;
    isLoadingSingleProject: boolean;

    //Action
    getProjects(currentPage:number, pageSize:number, locale: string): Promise<Projects>;
    getProject(slug: string,locale: string) : Promise<Projects>;
}
export {ProjectStore}