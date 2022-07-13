import { useCallback } from "react";
import type { ProjectStore } from "../../domain/repositories/projectStore"; 
import { getProjectsUseCase } from "../../domain/usecases/project/getProjectsUseCase";
import { getProjectDetailsUseCase } from "../../domain/usecases/project/getProjectDetailsUseCase";

function useProjectViewModel (store: ProjectStore){
    const getProjects=useCallback(function(currentPage:Number,pageSize:Number){
        getProjectsUseCase({
            getProjects:store.getProjects,
        },currentPage,pageSize);
    },
    [store.getProjects]
    );

    const getProjectsDetails=useCallback(function(slug: string){
        getProjectDetailsUseCase ({
            getProject:store.getProject,
        },slug);
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