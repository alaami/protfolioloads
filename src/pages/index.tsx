import { useMenuStoreImplementation } from "@/app/blog/data/repositories/menuStoreImplementation";
import { usePageStoreImplementation } from "@/app/blog/data/repositories/pageStoreImplementation";
import { useProjectStoreImplementation } from "@/app/blog/data/repositories/projectStoreImplementation";
import { useServicesStoreImplementation } from "@/app/blog/data/repositories/serviceStoreImplementation";
import { Page } from "@/app/blog/domain/entities/pageEntity";
import { Projects } from "@/app/blog/domain/entities/projectEntity";
import { Services } from "@/app/blog/domain/entities/serviceEntity";
import { usePageViewModel } from "@/app/blog/presentation/controller/pageViewModel";
import { useProjectViewModel } from "@/app/blog/presentation/controller/projectViewModel";
import { useServiceViewModel } from "@/app/blog/presentation/controller/serviceViewModel";
import HomeView from "@/app/blog/presentation/view/page/homeview";
import React from "react";

function IndexView({homePage, homeProjects,homeServices}) {

  let props={homePage,homeServices,homeProjects};
  return (
    <HomeView {...props}  />         
  );
} 

export default IndexView;
export async function  getStaticProps (){
  const locale = "all";
  const store = usePageStoreImplementation ();
  const storeProject = useProjectStoreImplementation ();
  const storeService = useServicesStoreImplementation ();
  const pathname = "/home"; 
  const {
    getPage,
  //  resetPageStore,
  } = usePageViewModel(store);

  const {
    getProjects,
  } = useProjectViewModel(storeProject);
  const {
    getServices,
  } = useServiceViewModel(storeService);
const projectsContent: Projects= await  getProjects(locale);
const homeContents: Page= await getPage(pathname,locale);
const serviceContents: Services= await getServices(locale);

  if (homeContents.data.length==0) {
      console.log("No matching Page.");
      return;
  }
  if (projectsContent.data.length==0) {
    console.log("No matching Projects.");
    return;
  }
  if (serviceContents.data.length==0) {
    console.log("No matching Services.");
    return;
  }
return   {props:{homePage: homeContents.data, homeProjects:projectsContent, homeServices:serviceContents}}; 
}