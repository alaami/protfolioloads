import { useEffect, useState } from "react";
import { useArticlesViewModel } from "../../controller/articleViewModel";
import { useArticlesStoreImplementation } from "../../../data/repositories/articleStoreImplementation";
import Articles from "./articlesView";
import Pagination from "@mui/material/Pagination";

const ArticlesView = ({filter}:any) => {
    const store = useArticlesStoreImplementation ();
    const [currentPage, setPage] = useState(1);
    //let pageSize = 3;
   // let currentPage = 1;
    let totalPage=0;

    const {
        getArticles,
        articles,
        articleMeta,
        isLoadingArticles

    } = useArticlesViewModel(store);

    const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
        setPage(value);
      };

    useEffect(()=>{
        getArticles(currentPage,filter.pageSize);
    },[getArticles,currentPage]);

    if(articles!=undefined){
        const leftArticlesCount = Math.ceil(articles.length / 5);
        const leftArticles = articles.slice(0, leftArticlesCount);
        const rightArticles = articles.slice(
          leftArticlesCount,
          articles.length
        );
    }
    
    if (articles!=undefined && articleMeta!=undefined){
        totalPage=Math.round(articleMeta?.pagination.total/filter.pageSize);
      }


    return(
        <div className="App">
        
        {isLoadingArticles ? (
            <h1>Loading</h1>
        ):
          (            
                <Articles articles={articles} />
          )}
        {totalPage>1 ? (<Pagination sx={{margin:'auto',width:'30%'}} count={totalPage} variant="outlined" color="primary" page={currentPage} onChange={handleChange}  />):null
          }
        </div>
    );
};
export default ArticlesView;