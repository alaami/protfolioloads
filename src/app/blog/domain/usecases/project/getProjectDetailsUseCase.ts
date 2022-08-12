import type { ProjectStore } from "../../repositories/projectStore";

type GetProjectStore= Pick <ProjectStore, "getProject">;

const getProjectDetailsUseCase= (store: GetProjectStore, slug:string,locale: string )=>{
    store.getProject(slug,locale);
};

export {getProjectDetailsUseCase}