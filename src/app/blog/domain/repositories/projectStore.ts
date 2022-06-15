import { Projects } from "../entities/projectEntity";
interface ProjectStore{
    // State
    projects: Projects | undefined;
    project: Projects | undefined;
    isLoadingProjects: boolean;
    isLoadingSingleProject: boolean;

    //Action
    getProjects(currentPage:Number, pageSize:Number): Promise<Projects>;
    getProject(slug: string) : Promise<Projects>;
}
export {ProjectStore}