import { usePageStoreImplementation } from "@/app/blog/data/repositories/pageStoreImplementation";
import { Page } from "@/app/blog/domain/entities/pageEntity";
import { usePageViewModel } from "@/app/blog/presentation/controller/pageViewModel";
import React from "react";
import AboutView from "@/app/blog/presentation/view/page/aboutView";
function IndexView({aboutPage}) {
  let props={aboutPage};
  return (
    <AboutView {...props}  />
  );
} 

export default IndexView;
export async function  getStaticProps (){
  const locale = "all";
  const store = usePageStoreImplementation ();
  const pathname = "/about"; 
  const {
    getPage,
  } = usePageViewModel(store);
const aboutContents: Page= await getPage(pathname,locale);


  if (aboutContents.data.length==0) {
      console.log("No matching Page.");
      return;
  }
return   {props:{aboutPage: aboutContents.data}}; 
}