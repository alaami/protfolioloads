import { Helmet } from 'react-helmet';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import ServiceView from "../service/serviceView";
import ProjectView from "../project/projectView";
import Grid  from "@mui/material/Grid";
import { Bio } from "../components/bio";
import { Divider } from "@mui/material";
import { Submission } from "../components/submission";
import { Link } from "react-router-dom";
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
    const url:string='https://www.loadstartech.com/';
   

   
    

    return(
        <div className="App">
        {(isLoadingPage || firstRender.current)? (
            <h1 style={{margin:"70px"}}>Loading Page {pathname} please refresh the page </h1>
        ):
        (page!=undefined)  && (  
                <>
                <Helmet>
                    <title>{page.attributes.seo.metaTitle}</title>
                    <meta name="description" content={page.attributes.seo.metaDescription} key="description" />
                    <meta name="keywords" content={page.attributes.seo.keywords} />
                    <meta name="twitter:card" content="summary_large_image" key="twitter:card" />
                    <meta property="og:url" content={url} key="og:url" />
                    <meta property="og:title" content={page.attributes.seo.metaTitle} key="og:title" />
                    <meta property="og:description" content={page.attributes.seo.metaDescription} key="og:description" />
                    <meta property="og:image" content={''} key="og:image" />
                    <link rel="canonical" href={url} />
            
                    {page.attributes.seo.preventIndexing && (
                    <>
                        <meta name="robots" content="noindex"></meta>
                        <meta name="googlebot" content="noindex"></meta>
                    </>
                    )}
                </Helmet>
                <Bio content={page.attributes.blocks[0].body} /><Divider sx={{ marginTop: 5 }} /><Box sx={{ width: '100%', maxWidth: 500, marginTop: 2 }}>
                        <Typography variant="h4" sx={{ fontWeight: 'bold', color: '#000' }} component="div" align="left" gutterBottom>
                            {page.attributes.blocks[2].sectionHeader[1].title}
                        </Typography>
                    </Box><Grid sx={{ display: "flex", alignContent: "space-around" }} container spacing={20}>
                            <ServiceView locale={locale}/>
                        </Grid><Divider /><Box
                            sx={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                marginTop: 2,
                                bgcolor: 'background.paper',
                                borderRadius: 1,
                            }}
                        >
                            <Box>
                                <Typography variant="h4" sx={{ fontWeight: 'bold', color: '#000' }} component="div" align="left" gutterBottom>
                                    {page.attributes.blocks[2].sectionHeader[0].title}
                                </Typography>
                            </Box>
                            <Link style={{ textDecoration: 'none' }}
                                to="/portfolio"
                            >
                                <StyledButton variant="outlined">  {page.attributes.blocks[2].action[0].title}</StyledButton>
                            </Link>
                        </Box><Grid container spacing={2}>
                            <ProjectView  filter={{ currentPage: 1, pageSize: 4, locale:locale }} />
                        </Grid><Divider /><Submission content={page.attributes.blocks[1]} />
{/*                 <Divider />
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
                <ArticlesView filter={{currentPage:1, pageSize:5}} /> */}
                </>
            )}
            
        </div>

    );
};
export default HomeView;