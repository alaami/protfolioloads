import React from "react";

import { useArticlesViewModel } from "../../controller/articleViewModel";
import { useArticlesStoreImplementation } from "../../../data/repositories/articleStoreImplementation";
import { useParams } from "react-router-dom";
import Moment from "react-moment";
import ReactMarkdown from "react-markdown";

const ArticlesDetailView = () => {
    const store = useArticlesStoreImplementation ();
    
    const {
        getArticleDetails,
        article,
        isLoadingSingleArticle,

    } = useArticlesViewModel(store);
    let { slug } = useParams();
    React.useEffect(()=>{
      if(slug!=undefined)
        getArticleDetails(slug);
    },[getArticleDetails]);
    var imageUrl =''
    if(article!=undefined){
         imageUrl =
        process.env.NODE_ENV !== "development"
          ? article[0].attributes.cover.data.attributes.url
          : process.env.REACT_APP_BACKEND_URL + article[0].attributes.cover.data.attributes.url;
    }
  
    return(
        <div className="App">
        
        {isLoadingSingleArticle ? (
            <h1>Loading article details...</h1>
        ):
        (article!=undefined)  && (    
 
            <div>
              <div
                id="banner"
                className="uk-height-medium uk-flex uk-flex-center uk-flex-middle uk-background-cover uk-light uk-padding uk-margin"
                data-src={imageUrl}
                data-srcset={imageUrl}
                data-uk-img>
                <h1>{article[0].attributes.title}</h1>
              </div>

              <div className="uk-section">
                <div className="uk-container uk-container-small">
                  <ReactMarkdown children={article[0].attributes.blocks[0].body} />
                  <p>
                    <Moment format="MMM Do YYYY">
                      {article[0].attributes.publishedAt}
                    </Moment>
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
    );
};
export default ArticlesDetailView;