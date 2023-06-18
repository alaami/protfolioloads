import {useContext} from "react";
import ReactMarkdown from "react-markdown";
import Stack from "@mui/material/Stack";
import Paper from "@mui/material/Paper";
import CardMedia from "@mui/material/CardMedia";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { customTheme } from "../../../../../main/utils/customTheme";
import Grid from "@mui/material/Grid";
import {StyledPagePaper, StyledSliderBox,StyledSliderContentBox} from  "../../../../../main/utils/customStyle"; 
import { useRouter } from "next/router";
import React from "react";
import { I18nContext } from "next-i18next";
import Icon from '@mui/material/Icon';
import Divider from "@mui/material/Divider";
import { List, ListItem, ListItemIcon, ListItemText, useTheme } from "@mui/material";
import { CheckBox, Css } from "@mui/icons-material";
import ServiceView from "../service/serviceView";
const ServicesView = (props:any) => {
    const { i18n: { language } } = useContext(I18nContext);
    const router = useRouter()
    const pathname=router.pathname;
    const page=props.servicesPage.filter(function(item){
        return item.attributes.locale == language;         
      });
    const theme = useTheme();
    let imageUrl =''
    if(page!=undefined){
         imageUrl = page[0].attributes.cover.data.attributes.url;
    }
    const serviceViewServices=props.serviceViewServices.data.filter(function(item){
        return item.attributes.locale == language;         
      });
    return(
        <div className="App">
        
        {((page==undefined))? (
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
                <Grid  container spacing={2} sx={{padding:5}} >
                    <Grid item xs={12} md={12} spacing={2} key="content__body" sx={{padding:10}}>
                     <ReactMarkdown>{page[0].attributes.blocks[1].body}</ReactMarkdown>
                    </Grid>
                    <Grid sx={{ display: "flex", alignContent: "space-around" }} container spacing={20}>
                            <ServiceView homeServices={serviceViewServices} bgColor={theme.palette.thirdly.main} color={theme.palette.primary.main}/>
                        </Grid>
                </Grid>                  
                </StyledPagePaper>
              </Stack>
           
          )}
       
        </div>
    );
};
export default ServicesView;