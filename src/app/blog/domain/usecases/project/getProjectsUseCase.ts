import type { ProjectStore } from "../../repositories/projectStore";


type GetProjectStore= Pick <ProjectStore, "getProjects">;

const getProjectsUseCase= (store: GetProjectStore,currentPage:number, pageSize:number)=>{
    store.getProjects(currentPage,pageSize);
}

export {getProjectsUseCase};