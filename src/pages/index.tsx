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
//import { appStoreImplementation } from "../data/appStoreImplementation";
//import { BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
//import { BrowserRouter as Router, Routes, Route, Link } from 'next/router';
/* import ArticleCategory from "../../app/blog/presentation/view/article/categoryArticle";
import AboutView from "../../app/blog/presentation/view/page/aboutView";
import ContactView from "../../app/blog/presentation/view/page/contactView";
import Header from "../../app/blog/presentation/view/components/Header";

import Footer from "../../app/blog/presentation/view/components/footer";
import PortfolioView from "../../app/blog/presentation/view/page/portfolioView";
import ProjectDetailView from "../../app/blog/presentation/view/project/projectDetailView";
import { customTheme } from "../utils/customTheme";
import LabView from "../../app/blog/presentation/view/page/labView"; */

function IndexView({homePage, homeProjects,homeServices}) {

  let props={homePage,homeServices,homeProjects};
  return (
    <HomeView {...props}  />
    //<Router>

     //   <HomeView pathname="/home" locale={locale}/>
            
/*           <Routes>
          <Route path="/" element={<HomeView pathname="/home" locale={locale} />} />
          <Route path="/about" element={<AboutView locale={locale} />} />
          <Route path="/lab" element={<LabView locale={locale}/>} />
          <Route path="/portfolio" element={<PortfolioView locale={locale}/>} />
          <Route path="/contact" element={<ContactView />} />
          <Route path="/article/:slug" element={<ArticlesDetailView />}  />
          <Route path="/project/:slug" element={<ProjectDetailView locale={locale}/>}  />
          <Route path="/article/category/:slug"  element={<ArticleCategory />} />
          </Routes> */
         
 //   </Router>
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