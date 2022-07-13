import { Projects } from "../entities/projectEntity";
interface ProjectStore{
    // State
    projects: Projects | undefined;
    project: Projects | undefined;
    isLoadingProjects: boolean;
    isLoadingSingleProject: boolean;

    //Action
    getProjects(currentPage:number, pageSize:number): Promise<Projects>;
    getProject(slug: string) : Promise<Projects>;
}
export {ProjectStore}