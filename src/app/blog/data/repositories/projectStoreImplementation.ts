import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";

import type { AppRootState } from "../../../../main/data/appStoreImplementation";
import type { ProjectStore } from "../../domain/repositories/projectStore"; 

import type { ProjectStoreState } from "../redux/project/projectReducer";

import { getProjectsAction, getProjectDetailsAction } from "../redux/project/projectAcitons";

const projectSelector = (state: AppRootState ) =>state.projects;
const useProjectStoreImplementation= ():ProjectStore => {
    
const{projects,project, isLoadingProjects, isLoadingSingleProject }=useSelector<
AppRootState,
ProjectStoreState
> (projectSelector);

const dispatch= useDispatch();

const getProjects=useCallback(
    () =>getProjectsAction()(dispatch),
    [dispatch]
);

const getProject=useCallback(
    (slug: String) =>getProjectDetailsAction(slug)(dispatch),
    [dispatch]
);

return {
projects,
project,
isLoadingProjects,
isLoadingSingleProject,
getProjects,
getProject,
};
};
export { useProjectStoreImplementation };
