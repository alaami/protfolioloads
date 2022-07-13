import type { ProjectStore } from "../../repositories/projectStore";


type GetProjectStore= Pick <ProjectStore, "getProjects">;

const getProjectsUseCase= (store: GetProjectStore,currentPage:Number, pageSize:Number)=>{
    store.getProjects(currentPage,pageSize);
}

export {getProjectsUseCase};