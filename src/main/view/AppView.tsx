import React from "react";
import { Provider } from "react-redux";
import ArticlesView from "../../app/blog/presentation/view/article/articleView";

import { appStoreImplementation } from "../data/appStoreImplementation";
import { BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import ArticlesDetailView from "../../app/blog/presentation/view/article/articleDetailView";
import ArticleCategory from "../../app/blog/presentation/view/article/categoryArticle";
import AboutView from "../../app/blog/presentation/view/page/aboutView";
import ContactView from "../../app/blog/presentation/view/page/contactView";
import Header from "../../app/blog/presentation/view/components/Header";
import HomeView from "../../app/blog/presentation/view/page/homeview";

function AppView() {
  return (
    <Router>
      <Provider store={appStoreImplementation}>
        <Header/>
        <Routes>
        <Route path="/" element={<HomeView />} />
        <Route path="/about" element={<AboutView />} />
        <Route path="/contact" element={<ContactView />} />
        <Route path="/article/:slug" element={<ArticlesDetailView />}  />
        <Route path="/article/category/:slug"  element={<ArticleCategory />} />
        </Routes>
      </Provider>
    </Router>
  );
} 
export default AppView;