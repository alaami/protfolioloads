import ArticlesView from "../article/articleView";
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import ServiceView from "../service/serviceView";
import ProjectView from "../project/projectView";
import Grid  from "@mui/material/Grid";
import { Bio } from "../components/bio";
import { Button, Divider, Stack } from "@mui/material";
import { Submission } from "../components/submission";
import { Link, useLocation } from "react-router-dom";
import { StyledButton } from "../../../../../main/utils/customStyle";
import { usePageStoreImplementation } from "../../../data/repositories/pageStoreImplementation";
import { useEffect, useRef } from "react";
import { usePageViewModel } from "../../controller/pageViewModel";

const HomeView = (props:any) => {
    const store = usePageStoreImplementation ();
    const pathname = props.pathname;
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
    
    return(
        <div className="App">
        {(isLoadingPage || firstRender.current)? (
            <h1>Loading Page {pathname}</h1>
        ):
        (page!=undefined)  && (  
            <Container sx={{marginTop:10}} maxWidth="xl">
                <Bio content={page.attributes.blocks[0].body}/>
                <Divider/>
                <Box
                    sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    marginTop:2,                    
                    bgcolor: 'background.paper',
                    borderRadius: 1,
                    }}
                >  
                <Box>          
                    <Typography variant="h4" sx={{fontWeight:'bold', color:'#000'}} component="div" align="left" gutterBottom>
                    {page.attributes.blocks[2].sectionHeader[0].title}
                    </Typography> 
                </Box> 
                <Link style={{ textDecoration: 'none' }}
                to="/portfolio"
                >                  
                 <StyledButton variant="outlined">  {page.attributes.blocks[2].action[0].title}</StyledButton>
                 </Link>
                </Box>
                <Grid  container spacing={2}>
                <ProjectView filter={{currentPage:1, pageSize:2}}/>
                </Grid>
                <Divider sx={{marginTop:5} }/>
                <Box sx={{ width: '100%', maxWidth: 500,  marginTop:2 }}>
                <Typography variant="h4" sx={{fontWeight:'bold', color:'#000'}} component="div" align="left" gutterBottom>
                {page.attributes.blocks[2].sectionHeader[1].title}
                </Typography>
                </Box>
                <Grid  sx={{display:"flex", alignContent:"space-around"}} container spacing={20}>
                <ServiceView />
                </Grid>
                <Divider/>
                <Submission content={page.attributes.blocks[1]}/>
                <Divider />
                <Box
                    sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    bgcolor: 'background.paper',
                    borderRadius: 1,
                    marginTop:2  
                    }}
                > 
                <Box>          
                    <Typography variant="h4" sx={{fontWeight:'bold'}}  align="left" gutterBottom>
                    {page.attributes.blocks[2].sectionHeader[2].title}
                    </Typography> 
                </Box>  
                <Box sx={{ alignItems: 'flex-start' }}>                 
                <StyledButton variant="outlined">{page.attributes.blocks[2].action[2].title}</StyledButton>
                </Box>
                </Box>
                <ArticlesView filter={{currentPage:1, pageSize:5}} />
            </Container>
            )}
        </div>

    );
};
export default HomeView;