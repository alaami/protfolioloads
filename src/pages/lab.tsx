import { usePageStoreImplementation } from "@/app/blog/data/repositories/pageStoreImplementation";
import { Page } from "@/app/blog/domain/entities/pageEntity";
import { usePageViewModel } from "@/app/blog/presentation/controller/pageViewModel";
import React from "react";
import LabView from "@/app/blog/presentation/view/page/labView";
function IndexView({labPage}) {

  let props={labPage};
  return (
    <LabView {...props}  />
  );
} 

export default IndexView;
export async function  getStaticProps (){
  const locale = "all";
  const store = usePageStoreImplementation ();
  const pathname = "/lab"; 
  const {
    getPage,
  } = usePageViewModel(store);
const labContents: Page= await getPage(pathname,locale);


  if (labContents.data.length==0) {
      console.log("No matching Page.");
      return;
  }
return   {props:{labPage: labContents.data}}; 
}