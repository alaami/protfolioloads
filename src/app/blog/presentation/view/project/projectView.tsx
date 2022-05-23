import { useEffect } from "react";

import { useProjectViewModel } from "../../controller/projectViewModel";
import { useProjectStoreImplementation } from "../../../data/repositories/projectStoreImplementation";
import CardProject from "../components/cardProject";
import  Grid  from "@mui/material/Grid"
import { Stack } from "@mui/material";
const ProjectView = () => {
    const store = useProjectStoreImplementation ();
    
    const {
        getProjects,
        projects,
        isLoadingProjects

    } = useProjectViewModel(store);

    useEffect(()=>{
      getProjects();
    },[getProjects]);



    return(
        <>       
        {isLoadingProjects ? (
            <h1>Loading projects ...</h1>
        ):
        (projects!=undefined)  &&  (                    
            projects.map((project:any) => {
              return (
                <CardProject
                  project={project}
                  key={`project__${project.attributes.slug}`}
                />
              );
            })
          )}
        </>
    );
};
export default ProjectView;