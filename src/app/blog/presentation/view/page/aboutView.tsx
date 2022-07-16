import {useEffect, useRef } from "react";
import { usePageViewModel } from "../../controller/pageViewModel";
import { usePageStoreImplementation } from "../../../data/repositories/pageStoreImplementation";
import ReactMarkdown from "react-markdown";
import { useLocation, useParams } from "react-router-dom";
import Stack from "@mui/material/Stack";
import Paper from "@mui/material/Paper";
import CardMedia from "@mui/material/CardMedia";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { customTheme } from "../../../../../main/utils/customTheme";
import Grid from "@mui/material/Grid";
import rehypeRaw from 'rehype-raw'
import {StyledPagePaper, StyledSliderBox,StyledSliderContentBox} from  "../../../../../main/utils/customStyle"; 

const AboutView = (props:any) => {
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
         imageUrl = process.env.REACT_APP_IMAGES_HOST + page.attributes.cover.data.attributes.url;
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
                <Box sx={{margin:'auto', padding:10}}>
                <ReactMarkdown rehypePlugins={[rehypeRaw]}children={page.attributes.blocks[1].body} />
                {page.attributes.blocks[1].body}
                </Box>
                    <Box sx={{          display: 'flex',
                        alignItems: 'flex-start',
                        m: 1,
                        height:300,
                        bgcolor:customTheme.palette.primary.main,
                        color:customTheme.palette.primary.contrastText}}>
                        <Grid  container spacing={2}>
                        {page.attributes.blocks[3].servicecard!.map((service:any) => {
                                  var iconUrl =
                                     process.env.NODE_ENV !== "development"
                                       ? service.image.data.attributes.url
                                       : process.env.REACT_APP_BACKEND_URL + service.image.data.attributes.url;
                        return (
                            <Grid item xs={12} md={4} key={`service__${service.title}`}>
                            <Paper sx={{height:200,margin:'auto', padding:5, bgcolor:'inherit',color:'inherit' }} elevation={0}>
                                <Stack>
                                    <Box >
                                    <CardMedia image={iconUrl} sx={{height:50,width:50, margin:'auto', mb:5}}/>
                                    <Typography gutterBottom variant="h5" component="div" align="center">
                                    {service.title}
                                    </Typography>
                                    <Typography variant="body1" align="center">
                                   {service.description}
                                    </Typography>
                                    </Box>
                                </Stack>
                            </Paper>
                        </Grid> 
                        );
                        })}

                       
                        </Grid>           
                    </Box>
                </StyledPagePaper>
              </Stack>
           
          )}
       
        </div>
    );
};
export default AboutView;