import { getProjectDetails, getProjects } from "../../datasources/projectAPIService"; 
import * as actionTypes from "../project/projectActionTypes"
const getProjectsAction =(currentPage:number, pageSize:number)=> (dispatch:any)=>{
dispatch({type:actionTypes.GET_PROJECTS});

return getProjects(currentPage,pageSize).then((projects)=>{
    dispatch({type: actionTypes.GET_PROJECTS_SUCCESS, projects});
    return projects;
});
};
const getProjectDetailsAction =(slug : string)=> (dispatch:any)=>{
    dispatch({type:actionTypes.GET_PROJECT_DETAILS});
    
    return getProjectDetails(slug).then((project)=>{
        dispatch({type: actionTypes.GET_PROJECT_DETAILS_SUCCESS, project});
        return project;
    });
};


export {getProjectsAction,getProjectDetailsAction }