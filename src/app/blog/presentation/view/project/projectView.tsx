import React,{ useEffect, useState } from "react";

import { useProjectViewModel } from "../../controller/projectViewModel";
import { useProjectStoreImplementation } from "../../../data/repositories/projectStoreImplementation";
import CardProject from "../components/cardProject";
import Pagination from "@mui/material/Pagination";
const ProjectView = ({filter}:any) => {
    const store = useProjectStoreImplementation ();
    const [currentPage, setPage] = useState(1);
    let totalPage=0;
    const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
      setPage(value);
    };
    const {
        getProjects,
        projects,
        projectMeta,
        isLoadingProjects

    } = useProjectViewModel(store);

    useEffect(()=>{
      getProjects(currentPage,filter.pageSize,filter.locale);
    },[getProjects,currentPage,filter.locale]);

    if (projects!=undefined && projectMeta!=undefined){
      totalPage=Math.round(projectMeta?.pagination.total/filter.pageSize);
    }

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
         {totalPage>1 ? (<Pagination sx={{margin:'auto',width:'30%'}} count={totalPage} variant="outlined" color="primary" page={currentPage} onChange={handleChange}  />):null
          }
        </>
    );
};
export default ProjectView;