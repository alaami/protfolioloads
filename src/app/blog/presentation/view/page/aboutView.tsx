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
const AboutView = (props:any) => {
    const { i18n: { language } } = useContext(I18nContext);
    const router = useRouter()
    const pathname=router.pathname;
    const page=props.aboutPage.filter(function(item){
        return item.attributes.locale == language;         
      });
    const theme = useTheme();
    let imageUrl =''
    if(page!=undefined){
         imageUrl = page[0].attributes.cover.data.attributes.url;
    }
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
                  <h2 id="h1service">
                   {page[0].attributes.title}
                  </h2>
                  </StyledSliderContentBox>
                  </StyledSliderBox>
                </CardMedia>
                <Grid  container spacing={2} >
                    <Grid item xs={12} md={7} key="content__body" sx={{padding:10}}>
                     <ReactMarkdown>{page[0].attributes.blocks[1].body}</ReactMarkdown>
                    </Grid>
                    <Grid item xs={12} md={5} key="content__help" sx={{padding:10}}>
                    <h2>
                            {page[0].attributes.blocks[4].title}
                    </h2>
                    {page[0].attributes.blocks[4].servicecard!.map((service:any) => {
                        return (
                            <ListItem divider>
                                <ListItemIcon>
                                    <Css />
                                </ListItemIcon>
                                <ListItemText 
                                    primary={`${service.title}`}/>
                        </ListItem>
                            
                        );
                        })}
                    </Grid>
                </Grid>
                    <h2 id="h1service">
                            {page[0].attributes.blocks[3].serviceTitle}
                    </h2>
                    <Divider sx={{ borderBottomWidth: 3,width:'30%',margin:'auto', marginBottom:2}}/>
                    <Box sx={{  display: 'flex',
                        alignItems: 'flex-start',
                        m: 1,
                        bgcolor:customTheme.palette.secondary.main,
                        color:customTheme.palette.secondary.contrastText}}>
                        <Grid  container spacing={2} >
                        {page[0].attributes.blocks[3].servicecard!.map((service:any) => {
                        return (
                            <Grid item xs={12} md={4} key={`service__${service.title}`}>
                            <Paper sx={{margin:'auto', padding:5, bgcolor:'inherit',color:'inherit' }} elevation={0}>
                                <Stack>
                                    <Box >
                                    <Icon sx={{ fontSize: '150px !important',margin:'auto', display:'block !important'}}>{service.icon}</Icon>
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