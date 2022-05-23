import { Projects } from "../entities/projectEntity";
interface ProjectStore{
    // State
    projects: Projects | undefined;
    project: Projects | undefined;
    isLoadingProjects: boolean;
    isLoadingSingleProject: boolean;

    //Action
    getProjects(): Promise<Projects>;
    getProject(slug: string) : Promise<Projects>;
}
export {ProjectStore}