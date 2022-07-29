import {useEffect, useRef} from "react";

import { usePageViewModel } from "../../controller/pageViewModel";
import { usePageStoreImplementation } from "../../../data/repositories/pageStoreImplementation";
import ReactMarkdown from "react-markdown";
import { useLocation, useParams } from "react-router-dom";
import Stack from "@mui/material/Stack";
import CardMedia from "@mui/material/CardMedia";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import rehypeRaw from 'rehype-raw'
import ProjectView from "../project/projectView";
import { StyledPagePaper } from "../../../../../main/utils/customStyle";

const PortfolioView = (props:any) => {
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
         imageUrl =
        process.env.NODE_ENV !== "development"
          ? page.attributes.cover.data.attributes.url
          : process.env.REACT_APP_BACKEND_URL + page.attributes.cover.data.attributes.url;
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
                   <Box sx={{          display: 'flex',
                    alignItems: 'flex-start',
                    p: 1,
                    m: 1,
                    height:'100%'}}>
                  <Box sx={{ alignSelf: 'center',margin:'auto'}}>
                  <Typography variant="h2" component="div"  align="center" gutterBottom>
                  {page.attributes.title}
                  </Typography>
                  </Box>
                  </Box>
                </CardMedia>
                <Box sx={{margin:'auto', padding:10}}>
                <ReactMarkdown rehypePlugins={[rehypeRaw]}children={page.attributes.blocks[1].body} />
                {page.attributes.blocks[1].body}
                </Box>
                <Grid  container spacing={2}>
                <ProjectView filter={{pageSize:8}} />
                </Grid>
                </StyledPagePaper>
              </Stack>
           
          )}
       
        </div>
    );
};
export default PortfolioView;