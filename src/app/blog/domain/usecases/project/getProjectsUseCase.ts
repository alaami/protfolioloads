import type { ProjectStore } from "../../repositories/projectStore";


type GetProjectStore= Pick <ProjectStore, "getProjects">;

const getProjectsUseCase= (store: GetProjectStore,currentPage:number, pageSize:number,locale: string)=>{
    store.getProjects(currentPage,pageSize,locale);
}

export {getProjectsUseCase};