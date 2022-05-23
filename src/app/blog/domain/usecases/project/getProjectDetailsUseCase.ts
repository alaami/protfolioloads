import type { ProjectStore } from "../../repositories/projectStore";

type GetProjectStore= Pick <ProjectStore, "getProject">;

const getProjectDetailsUseCase= (store: GetProjectStore, slug:string )=>{
    store.getProject(slug);
};

export {getProjectDetailsUseCase}