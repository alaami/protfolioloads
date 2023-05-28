import { useCallback, useContext, useEffect, useLayoutEffect, useRef } from "react";

import { usePageViewModel } from "../../controller/pageViewModel";
import { usePageStoreImplementation } from "../../../data/repositories/pageStoreImplementation";
import ReactMarkdown from "react-markdown";
import Stack from "@mui/material/Stack";
import CardMedia from "@mui/material/CardMedia";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import rehypeRaw from 'rehype-raw'
import {StyledPagePaper, StyledSliderBox,StyledSliderContentBox} from  "../../../../../main/utils/customStyle"; 
import ArticlesView from "../article/articleView";
import { useRouter } from "next/router";
import React from "react";
import { I18nContext } from "next-i18next";
const LabView = (props:any) => {
    const { i18n: { language } } = useContext(I18nContext);
    const router = useRouter()
    const pathname=router.pathname;
    const page=props.labPage.filter(function(item){
        return item.attributes.locale == language;         
      });
    
    let imageUrl =''
    if(page!=undefined){
         imageUrl = page[0].attributes.cover.data.attributes.url;
    }
  
    return(
        <div className="App">
        
        {(page==undefined )? (
            <h1>Loading Page {pathname}</h1>
        ):
        (page!=undefined)  && (    
            <Stack>
                <StyledPagePaper elevation={0}>
                <CardMedia
                    className="uk-height-medium uk-flex uk-flex-center uk-flex-middle uk-background-cover uk-light uk-padding uk-margin"
                    image={imageUrl}
                    title={page[0].attributes.title}
                    sx={{height:600}}
                    >
                   <StyledSliderBox>
                  <StyledSliderContentBox>
                  <h1>
                  {page[0].attributes.title}
                  </h1>
                  </StyledSliderContentBox>
                  </StyledSliderBox>
                </CardMedia>
                <Box sx={{          display: 'flex',
                    alignItems: 'flex-start',
                    p: 1,
                    m: 1,
                    height:'100%'}}>
                <Box sx={{margin:'auto', padding:10}}>
                    {
                     (page[0].attributes.blocks[0]!=undefined) && (<ReactMarkdown rehypePlugins={[rehypeRaw]}>{page[0].attributes.blocks[0].body}</ReactMarkdown>)
                    }
                </Box>
                </Box>                               
                </StyledPagePaper>             
              </Stack>
           
          )}
        </div>
    );
 // to addto line 63   <ArticlesView filter={{currentPage:1, pageSize:5}}/>
};
export default LabView;