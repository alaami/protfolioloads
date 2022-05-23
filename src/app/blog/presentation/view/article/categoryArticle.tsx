import React from "react";
import { useParams } from "react-router";
import { useArticlesStoreImplementation } from "../../../data/repositories/articleStoreImplementation";
import { useArticlesViewModel } from "../../controller/articleViewModel";
import Articles from "./articlesView";


const ArticleCategory = () => {
    const store = useArticlesStoreImplementation ();
    
    const {
        getArticlesByCategory,
        categoryArticles,
        isLoadingSingleArticleByCategory,

    } = useArticlesViewModel(store);
    let { slug } = useParams();
  React.useEffect(()=>{
    if(slug!=undefined){
      console.log("USE EFFECT FUNCTION TRIGGERED");
      getArticlesByCategory(slug);
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