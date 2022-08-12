import { useCallback } from "react";
import type { ProjectStore } from "../../domain/repositories/projectStore"; 
import { getProjectsUseCase } from "../../domain/usecases/project/getProjectsUseCase";
import { getProjectDetailsUseCase } from "../../domain/usecases/project/getProjectDetailsUseCase";

function useProjectViewModel (store: ProjectStore){
    const getProjects=useCallback(function(currentPage:number,pageSize:number,locale:string){
        getProjectsUseCase({
            getProjects:store.getProjects,
        },currentPage,pageSize,locale);
    },
    [store.getProjects]
    );

    const getProjectsDetails=useCallback(function(slug: string,locale:string){
        getProjectDetailsUseCase ({
            getProject:store.getProject,
        },slug,locale);
    },
    [store.getProject]
    );
return {
    projects: store.projects?.data,
    projectMeta:store.projects?.meta,
    project:store.project?.data,
    isLoadingProjects: typeof store.projects === "undefined" || store.isLoadingProjects,
    isLoadingSingleProject: typeof store.project === "undefined" || store.isLoadingSingleProject,
    getProjects,
    getProjectsDetails,
};
}
export{useProjectViewModel}