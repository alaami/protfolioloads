import { useCallback, useEffect, useLayoutEffect, useRef } from "react";

import { usePageViewModel } from "../../controller/pageViewModel";
import { usePageStoreImplementation } from "../../../data/repositories/pageStoreImplementation";
import ReactMarkdown from "react-markdown";
import { useLocation, useParams } from "react-router-dom";
import Stack from "@mui/material/Stack";
import Paper from "@mui/material/Paper";
import CardMedia from "@mui/material/CardMedia";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import rehypeRaw from 'rehype-raw'
import {StyledPagePaper, StyledSliderBox,StyledSliderContentBox} from  "../../../../../main/utils/customStyle"; 
import ArticlesView from "../article/articleView";

const LabView = (props:any) => {
    const store = usePageStoreImplementation ();
    const pathname = useLocation().pathname;
    const firstRender = useRef(true);
    const locale = props.locale;
    const {
        getPage,
        resetPageStore,
        page,
        isLoadingPage

    } = usePageViewModel(store);
    

    useEffect(()=>{   
        if (firstRender.current) {
            resetPageStore();
            firstRender.current = false;
          }
        if(locale!=''){
         getPage(pathname,locale);
        }
    },[getPage,locale]);
    
    var imageUrl =''
    if(page!=undefined && !firstRender.current){
         imageUrl = page.attributes.cover.data.attributes.url;
    }
  
    return(
        <div className="App">
        
        {(isLoadingPage || firstRender.current)? (
            <h1>Loading Page {pathname}</h1>
        ):
        (page!=undefined)  && (    
            <Stack>
                <StyledPagePaper elevation={0}>
                <CardMedia
                    className="uk-height-medium uk-flex uk-flex-center uk-flex-middle uk-background-cover uk-light uk-padding uk-margin"
                    image={imageUrl}
                    title={page.attributes.title}
                    sx={{height:600}}
                    >
                   <StyledSliderBox>
                  <StyledSliderContentBox>
                  <Typography variant="h2" component="div"  align="center" gutterBottom>
                  {page.attributes.title}
                  </Typography>
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
                     (page.attributes.blocks[0]!=undefined) && (<ReactMarkdown rehypePlugins={[rehypeRaw]}children={page.attributes.blocks[0].body} />)
                    }
                </Box>
                </Box>    
                <ArticlesView filter={{currentPage:1, pageSize:5}}/>      
                </StyledPagePaper>             
              </Stack>
           
          )}
       
        </div>
    );
};
export default LabView;