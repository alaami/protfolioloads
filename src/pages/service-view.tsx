import { usePageStoreImplementation } from "@/app/blog/data/repositories/pageStoreImplementation";
import { Page } from "@/app/blog/domain/entities/pageEntity";
import { usePageViewModel } from "@/app/blog/presentation/controller/pageViewModel";
import React from "react";
import ServicesView from "@/app/blog/presentation/view/page/servicesView";
import { Services } from "@/app/blog/domain/entities/serviceEntity";
import { useServiceViewModel } from "@/app/blog/presentation/controller/serviceViewModel";
import { useServicesStoreImplementation } from "@/app/blog/data/repositories/serviceStoreImplementation";
function IndexView({servicesPage,serviceViewServices}) {
  let props={servicesPage, serviceViewServices};
  return (
    <ServicesView {...props}  />
  );
} 

export default IndexView;
export async function  getStaticProps (){
  const locale = "all";
  const store = usePageStoreImplementation ();
  const storeService = useServicesStoreImplementation ();
  const pathname = "/service-view"; 
  const {
    getPage,
  } = usePageViewModel(store);
  const {
    getServices,
  } = useServiceViewModel(storeService);
const servicesViewContents: Page= await getPage(pathname,locale);

const serviceContents: Services= await getServices(locale);
  if (servicesViewContents.data.length==0) {
      console.log("No matching Page.");
      return;
  }
  if (serviceContents.data.length==0) {
    console.log("No matching Services.");
    return;
  }
return   {props:{servicesPage: servicesViewContents.data,serviceViewServices:serviceContents}}; 
}