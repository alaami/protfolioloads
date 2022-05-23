import type { ProjectStore } from "../../repositories/projectStore";


type GetProjectStore= Pick <ProjectStore, "getProjects">;

const getProjectsUseCase= (store: GetProjectStore)=>{
    store.getProjects();
}

export {getProjectsUseCase};