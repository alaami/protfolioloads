import { Provider } from "react-redux";
import { appStoreImplementation } from "../data/appStoreImplementation";
import Header from "../../app/blog/presentation/view/components/HeaderLayout";
import Footer from "../../app/blog/presentation/view/components/footer";
import { Container, ThemeProvider } from "@mui/material";
import { customTheme } from "../utils/customTheme";
import { useEffect, useState } from "react";
import React from "react";
function AppView() {
  const [locale, setLocale] = useState("");
  
  useEffect(() => {
      if(window.localStorage.getItem('lang')=='null' || window.localStorage.getItem('lang')==''){
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
    
    //<Router>
      <Provider store={appStoreImplementation}>
      <ThemeProvider theme={customTheme}>
          <Header locale={locale} onLanguageChange={handleLanguageChange}/>
          <Container maxWidth="xl">
{/*           <Routes>
          <Route path="/" element={<HomeView pathname="/home" locale={locale} />} />
          <Route path="/about" element={<AboutView locale={locale} />} />
          <Route path="/lab" element={<LabView locale={locale}/>} />
          <Route path="/portfolio" element={<PortfolioView locale={locale}/>} />
          <Route path="/contact" element={<ContactView />} />
          <Route path="/article/:slug" element={<ArticlesDetailView />}  />
          <Route path="/project/:slug" element={<ProjectDetailView locale={locale}/>}  />
          <Route path="/article/category/:slug"  element={<ArticleCategory />} />
          </Routes> */}
          </Container>
          <Footer />
        </ThemeProvider>
      </Provider>
 //   </Router>
  );
} 

export default AppView;