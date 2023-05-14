import type { ProjectStore } from "../../repositories/projectStore";


type GetProjectStore= Pick <ProjectStore, "getProjectsAll">;

const getProjectsUseCase= (store: GetProjectStore,locale: string)=>{
    return store.getProjectsAll(locale);
}

export {getProjectsUseCase};