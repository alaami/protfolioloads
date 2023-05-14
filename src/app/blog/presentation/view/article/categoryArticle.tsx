import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { useArticlesStoreImplementation } from "../../../data/repositories/articleStoreImplementation";
import { useArticlesViewModel } from "../../controller/articleViewModel";
import Articles from "./articlesView";

//ToDo
const ArticleCategory = () => {
    const store = useArticlesStoreImplementation ();
    const router = useRouter()
    const { slug } = router.query // get params
    const {
        getArticlesByCategory,
        categoryArticles,
        isLoadingSingleArticleByCategory,

    } = useArticlesViewModel(store);
  useEffect(()=>{
    if(slug!=undefined){
      console.log("USE EFFECT FUNCTION TRIGGERED");
      getArticlesByCategory(slug.toString());
    }
  },[getArticlesByCategory,slug]);
  return (
    <div className="App">
        
    {isLoadingSingleArticleByCategory ? (
        <h1>Loading article by category...</h1>
    ):
    ((categoryArticles!=undefined) &&
    (    
            <div>
              <div className="uk-section">
                <div className="uk-container uk-container-large">
                  <h1>{categoryArticles[0].attributes.category.data.attributes.name}</h1>
                  <Articles articles={categoryArticles} />
                </div>
              </div>
            </div>
        ))}
  </div>
  );
};

export default ArticleCategory;