import React from "react";
import { useProjectViewModel } from "@/app/blog/presentation/controller/projectViewModel";
import { useProjectStoreImplementation } from "@/app/blog/data/repositories/projectStoreImplementation";
import ProjectDetailView from "@/app/blog/presentation/view/project/projectDetailView";
import { Projects } from "@/app/blog/domain/entities/projectEntity";
import { GetStaticPaths } from "next";
function projectView({projectDetails}) {

  let props={projectDetails};
  return (
    <ProjectDetailView {...props}  />
  );
} 

export default projectView;
export async function  getStaticProps (ctx){
    
  const slug = ctx.params.slug as string;
  const locale = "all";
  const storeProject = useProjectStoreImplementation ();
  const {
    getProjectsDetails,

} = useProjectViewModel(storeProject);
const projectDetailsContents: Projects= await getProjectsDetails(slug,locale);


  if (projectDetailsContents.data.length==0) {
      console.log("No matching Project Details.");
      return;
  }
return   {props:{projectDetails: projectDetailsContents.data}}; 
}

export const getStaticPaths: GetStaticPaths<{ slug: string }> = async () => {

    return {
      fallback: false,
      paths:[ {params: { slug: 'task-manager'}},
      {params: { slug: 'subscription-management'}},
      {params: { slug: 'single-sign-on-sso'}}
     
      ],
    };
  };

  