import { usePageStoreImplementation } from "@/app/blog/data/repositories/pageStoreImplementation";
import { Page } from "@/app/blog/domain/entities/pageEntity";
import { usePageViewModel } from "@/app/blog/presentation/controller/pageViewModel";
import React from "react";
import PortfolioView from "@/app/blog/presentation/view/page/portfolioView";
import { useProjectStoreImplementation } from "@/app/blog/data/repositories/projectStoreImplementation";
import { useProjectViewModel } from "@/app/blog/presentation/controller/projectViewModel";
import { Projects } from "@/app/blog/domain/entities/projectEntity";
function IndexView({portfolioPage,portfolioProjects}) {

  let props={portfolioPage,portfolioProjects};

  return (
    <PortfolioView {...props}  />
  );
} 

export default IndexView;
export async function  getStaticProps (){
  const locale = "all";
  const store = usePageStoreImplementation ();
  const storeProject = useProjectStoreImplementation ();
  const pathname = "/portfolio"; 
  
  const {
    getPage,
  } = usePageViewModel(store);

  const {
    getProjects,
  } = useProjectViewModel(storeProject);
const portfolioContents: Page= await getPage(pathname,locale);
const projectsContent: Projects= await  getProjects(locale);

  if (projectsContent.data.length==0) {
    console.log("No matching Projects.");
    return;
  }
  if (portfolioContents.data.length==0) {
      console.log("No matching Page.");
      return;
  }
return   {props:{portfolioPage: portfolioContents.data, portfolioProjects:projectsContent}}; 
}