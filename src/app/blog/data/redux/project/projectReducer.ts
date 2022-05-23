import type { AnyAction } from "redux";
import type { ProjectStore } from "../../../domain/repositories/projectStore";
import * as actionTypes from "./projectActionTypes"

type ProjectStoreState = Omit<ProjectStore,"getProjects" | "getProject">

const INITIAL_STATE: ProjectStoreState = {
    projects: undefined,
    project: undefined,
    isLoadingProjects: false,
    isLoadingSingleProject: false,
  };

  const projectReducer= (state: ProjectStoreState= INITIAL_STATE, action :AnyAction)=>{
    switch (action.type){
        case actionTypes.GET_PROJECTS:
            return {...state, isLoadingProjects:true};
        case actionTypes.GET_PROJECT_DETAILS:
            return {...state, isLoadingSingleProject:true};
        case actionTypes.GET_PROJECTS_SUCCESS:
            return {...state, isLoadingProjects:false, projects:action.projects};
        case actionTypes.GET_PROJECT_DETAILS_SUCCESS:
            return {...state, isLoadingSingleProject:false, project:action.project};
        default:
            return state;
    }
  };

  export {projectReducer}
  export type {ProjectStoreState};