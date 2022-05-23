import { useEffect } from "react";

import { useArticlesViewModel } from "../../controller/articleViewModel";
import { useArticlesStoreImplementation } from "../../../data/repositories/articleStoreImplementation";
import Articles from "./articlesView";

const ArticlesView = () => {
    const store = useArticlesStoreImplementation ();
    
    const {
        getArticles,
        articles,
        isLoadingArticles

    } = useArticlesViewModel(store);

    useEffect(()=>{
        getArticles();
    },[getArticles]);

    if(articles!=undefined){
        const leftArticlesCount = Math.ceil(articles.length / 5);
        const leftArticles = articles.slice(0, leftArticlesCount);
        const rightArticles = articles.slice(
          leftArticlesCount,
          articles.length
        );
    }



    return(
        <div className="App">
        
        {isLoadingArticles ? (
            <h1>Loading</h1>
        ):
          (            
                <Articles articles={articles} />
          )}
       
        </div>
    );
};
export default ArticlesView;