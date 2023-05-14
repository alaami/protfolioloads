import React, { useEffect } from "react";

import { useArticlesViewModel } from "../../controller/articleViewModel";
import { useArticlesStoreImplementation } from "../../../data/repositories/articleStoreImplementation";
import Moment from "react-moment";
import ReactMarkdown from "react-markdown";
import { Box } from "@mui/system";
import Paper from "@mui/material/Paper";
import { CardMedia, Stack, Typography } from "@mui/material";
import { useRouter } from "next/router";


//ToDo

const ArticlesDetailView = () => {
    const store = useArticlesStoreImplementation ();
    const router = useRouter()
    const { slug } = router.query
    const {
        getArticleDetails,
        article,
        isLoadingSingleArticle,

    } = useArticlesViewModel(store);

    useEffect(()=>{
      if(slug!=undefined)
        getArticleDetails(slug.toString());
    },[getArticleDetails]);
    let imageUrl =''
    if(article!=undefined){
         imageUrl =
        process.env.NODE_ENV !== "development"
          ? article[0].attributes.cover.data.attributes.url
          : process.env.REACT_APP_BACKEND_URL + article[0].attributes.cover.data.attributes.url;
    }
  //<ReactMarkdown children={article[0].attributes.blocks[0].body} /> add it to L69 
    return(
        <div className="App">
        
        {isLoadingSingleArticle ? (
            <h1>Loading article details...</h1>
        ):
        (article!=undefined)  && (    
 
            <Stack>
                <Paper sx={{padding:5, margin:'auto', marginTop:10}} elevation={0}>
                <CardMedia
                                        className="uk-height-medium uk-flex uk-flex-center uk-flex-middle uk-background-cover uk-light uk-padding uk-margin"
                                        image={imageUrl}
                                        title={article[0].attributes.title}
                                        sx={{height:700}}
                                    >
                   <Box sx={{          display: 'flex',
          alignItems: 'flex-start',
          p: 1,
          m: 1,
          height:'100%'}}>
                  <Box sx={{ alignSelf: 'center',margin:'auto'}}>
                  <Typography variant="h2" component="div"  align="center" gutterBottom>
                  {article[0].attributes.title}
                  </Typography>
                  </Box>
                  </Box>
                </CardMedia>
                <Box sx={{margin:'auto', padding:10}}>
                <ReactMarkdown>{article[0].attributes.blocks[0].body}</ReactMarkdown>
                  <p>
                    <Moment format="MMM Do YYYY">
                      {article[0].attributes.publishedAt}
                    </Moment>
                  </p>
                </Box>
                </Paper>
              </Stack>

          )}
        </div>
    );
};
export default ArticlesDetailView;
