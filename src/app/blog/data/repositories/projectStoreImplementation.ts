import { useCallback } from "react";

import type { ProjectStore } from "../../domain/repositories/projectStore"; 
import { getProjectDetails, getProjects } from "../datasources/projectAPIService";


const useProjectStoreImplementation= ():ProjectStore => {

const getProjectsAll=
    (locale:string) =>getProjects(locale).then(projects=>projects);

const getProject=
    (slug: string,locale:string) =>getProjectDetails(slug,locale).then(project=>project);


return {
getProjectsAll,
getProject,
};
};
export { useProjectStoreImplementation };
