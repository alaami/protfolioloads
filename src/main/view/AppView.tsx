import { Provider } from "react-redux";
import { appStoreImplementation } from "../data/appStoreImplementation";
import { BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import ArticlesDetailView from "../../app/blog/presentation/view/article/articleDetailView";
import ArticleCategory from "../../app/blog/presentation/view/article/categoryArticle";
import AboutView from "../../app/blog/presentation/view/page/aboutView";
import ContactView from "../../app/blog/presentation/view/page/contactView";
import Header from "../../app/blog/presentation/view/components/Header";
import HomeView from "../../app/blog/presentation/view/page/homeview";
import Footer from "../../app/blog/presentation/view/components/footer";
import { Container, ThemeProvider } from "@mui/material";
import Divider from "@mui/material/Divider"
import PortfolioView from "../../app/blog/presentation/view/page/portfolioView";
import ProjectDetailView from "../../app/blog/presentation/view/project/projectDetailView";
import { customTheme } from "../utils/customTheme";
import LabView from "../../app/blog/presentation/view/page/labView";
import { useEffect, useState } from "react";

function AppView() {
  const [locale, setLocale] = useState("");
  
  useEffect(() => {
      if(window.localStorage.getItem('lang')==''){
        setLocale('en-CA');
        window.localStorage.setItem('lang', 'en-CA');
      }else{
        setLocale(window.localStorage.getItem('lang')!);
      }
     

      
    }, []);
  
    useEffect(() => {
      window.localStorage.setItem('lang', locale);
    }, [locale]);

  
  function handleLanguageChange(locale:string){
    setLocale(locale);
  }
  return (
    
    <Router>
      <Provider store={appStoreImplementation}>
      <ThemeProvider theme={customTheme}>
          <Header locale={locale} onLanguageChange={handleLanguageChange}/>
          <Container maxWidth="xl">
          <Routes>
          <Route path="/" element={<HomeView pathname="/home" locale={locale} />} />
          <Route path="/about" element={<AboutView locale={locale} />} />
          <Route path="/lab" element={<LabView locale={locale}/>} />
          <Route path="/portfolio" element={<PortfolioView locale={locale}/>} />
          <Route path="/contact" element={<ContactView />} />
          <Route path="/article/:slug" element={<ArticlesDetailView />}  />
          <Route path="/project/:slug" element={<ProjectDetailView />}  />
          <Route path="/article/category/:slug"  element={<ArticleCategory />} />
          </Routes>
          </Container>
          <Divider sx={{marginLeft:10,marginRight:10}}/>
          <Footer/>
        </ThemeProvider>
      </Provider>
    </Router>
  );
} 

export default AppView;