import React,{ useEffect, useState } from "react";
import CardProject from "../components/cardProject";
import Pagination from "@mui/material/Pagination";
const ProjectView = (props:any) => {
    const [currentPage, setPage] = useState(1);
    let totalPage=0;
    let paginationTotal=0;
    const pageSize=props.filter.pageSize;
  //  const pathname=router.pathname;
    let projectsArray=[];
    let projects=[];
    const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
      setPage(value);
    };
    if(props.homeProjects!=undefined){
      projectsArray=props.homeProjects;
    }else if (props.portfolioProjects!=undefined){
      projectsArray=props.portfolioProjects;
    }
    if(projectsArray.length>0){
        paginationTotal=projectsArray.length;   
        const chuckedResult=arrChunk(projectsArray,pageSize);
        projects=chuckedResult[currentPage-1];
    }

    if (projects!=undefined){
      totalPage=Math.round(paginationTotal/pageSize);
    }
    function arrChunk(arr, size)
      {
        return arr.reduce((acc, e, i) =>
        {
          if (i % size)
          {
            acc[acc.length - 1].push(e);
          }
          else
          {
            acc.push([e]);
          }
          return acc;
        }, []);
      }

    return(
        <>       
        {projects==undefined ? (
            <h2>Loading projects ...</h2>
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
         {totalPage>1 ? (<Pagination sx={{margin:'auto',marginBottom:'10px', width:'30%'}} count={totalPage} variant="outlined" color="primary" page={currentPage} onChange={handleChange}  />):null
          }
        </>
    );
};
export default ProjectView;