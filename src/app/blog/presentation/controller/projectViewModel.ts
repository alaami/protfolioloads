import type { ProjectStore } from "../../domain/repositories/projectStore"; 
import { getProjectsUseCase } from "../../domain/usecases/project/getProjectsUseCase";
import { getProjectDetailsUseCase } from "../../domain/usecases/project/getProjectDetailsUseCase";

function useProjectViewModel (store: ProjectStore){
    const getProjects=async function(locale:string){
        return getProjectsUseCase({
            getProjectsAll:store.getProjectsAll,
        },locale);
    }

    const getProjectsDetails=async function(slug: string,locale:string){
        return getProjectDetailsUseCase ({
            getProject:store.getProject,
        },slug,locale);
    }
return {
    getProjects,
    getProjectsDetails,
};
}
export{useProjectViewModel}