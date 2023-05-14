import { usePageStoreImplementation } from "@/app/blog/data/repositories/pageStoreImplementation";
import { Page } from "@/app/blog/domain/entities/pageEntity";
import { usePageViewModel } from "@/app/blog/presentation/controller/pageViewModel";
import React from "react";
import ServicesView from "@/app/blog/presentation/view/page/servicesView";
function IndexView({servicesPage}) {
  let props={servicesPage};
  return (
    <ServicesView {...props}  />
  );
} 

export default IndexView;
export async function  getStaticProps (){
  const locale = "all";
  const store = usePageStoreImplementation ();
  const pathname = "/service-view"; 
  const {
    getPage,
  } = usePageViewModel(store);
const servicesContents: Page= await getPage(pathname,locale);


  if (servicesContents.data.length==0) {
      console.log("No matching Page.");
      return;
  }
return   {props:{servicesPage: servicesContents.data}}; 
}