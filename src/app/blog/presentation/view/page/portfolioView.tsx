import {useContext} from "react";
import ReactMarkdown from "react-markdown";
import Stack from "@mui/material/Stack";
import CardMedia from "@mui/material/CardMedia";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import ProjectView from "../project/projectView";
import { StyledPagePaper } from "../../../../../main/utils/customStyle";
import { useRouter } from "next/router";
import React from "react";
import { I18nContext } from "next-i18next";
const PortfolioView = (props:any) => {
    
    const { i18n: { language } } = useContext(I18nContext);
    const router = useRouter();
    const pathname= router.pathname;
    const page=props.portfolioPage.filter(function(item){
        return item.attributes.locale == language;         
      });
    
    const portfolioProjects=props.portfolioProjects.data.filter(function(item){
        return item.attributes.locale == language;         
      });

    const filter={locale:language,pageSize:5}
    const meta= props.portfolioProjects.meta;
    const pageProps={portfolioProjects,meta,filter};
    let imageUrl =''
    if(page!=undefined){
         imageUrl = page[0].attributes.cover.data.attributes.url;
         pageProps.filter.pageSize=page[0].attributes.pageSettings.caseNumber;
    }
    return(
        <div className="App">
        
        {(page==undefined)? (
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
                   <Box sx={{display: 'flex',
                    alignItems: 'flex-start',
                    p: 1,
                    m: 1,
                    height:'100%'}}>
                  <Box sx={{ alignSelf: 'center',margin:'auto'}}>
                  <h1>
                  {page[0].attributes.title}
                  </h1>
                  </Box>
                  </Box>
                </CardMedia>
                <Box sx={{margin:'auto', padding:10}}>
                <ReactMarkdown>
                    {page[0].attributes.blocks[1].body}
                </ReactMarkdown>
                </Box>
                <Grid  container spacing={2}>               
                <ProjectView {...pageProps} />
                </Grid>
                </StyledPagePaper>
              </Stack>
           
          )}
       
        </div>
    );
};
export default PortfolioView;