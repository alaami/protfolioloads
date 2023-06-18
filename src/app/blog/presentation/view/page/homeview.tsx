//import { Helmet } from 'react-helmet';
import Head from 'next/head'
import Box from '@mui/material/Box';
import ServiceView from "../service/serviceView";
import ProjectView from "../project/projectView";
import Grid from "@mui/material/Grid";
import { Bio } from "../components/bio";
import { Divider } from "@mui/material";
import { Submission } from "../components/submission";
import { StyledButton } from "../../../../../main/utils/customStyle";
import React, { useContext } from "react";
import Link from 'next/link';
import { useRouter } from 'next/router'
import { useTheme } from '@mui/material/styles';
import { I18nContext } from 'next-i18next';
import { ClientCarousel } from '../components/ClientCarousel';



const HomeView = (props: any) => {
    const { i18n: { language } } = useContext(I18nContext);
    const router = useRouter()
    const pathname = router.pathname;
    const url = 'https://www.loadstartech.com/';
    const page = props.homePage.filter(function (item) {
        return item.attributes.locale == language;
    });

    const homeProjects = props.homeProjects.data.filter(function (item) {
        return item.attributes.locale == language;
    });

    const homeServices = props.homeServices.data.filter(function (item) {
        return item.attributes.locale == language;
    });
    let filter = { locale: language, pageSize: 2 }
    let meta = props.homeProjects.meta;
    let pageProps = { homeProjects, meta, filter };
    const theme = useTheme();
    //console.log(JSON.stringify(homeServices, null, 4));
    if (page != undefined) {
        pageProps.filter.pageSize = page[0].attributes.pageSettings.caseNumber;
    }

    return (
        <div className="App">
            {(page == undefined) ? (
                <h1 style={{ margin: "70px" }}>Loading Page {pathname} please refresh the page </h1>
            ) :
                (page != undefined) && (
                    <>
                        <Head>
                            {page[0].attributes.seo && (
                                <>
                                    <title>{page[0].attributes.seo.metaTitle}</title>
                                    <meta name="description" content={page[0].attributes.seo.metaDescription} key="description" />
                                    <meta name="keywords" content={page[0].attributes.seo.keywords} />
                                    <meta name="twitter:card" content="summary_large_image" key="twitter:card" />
                                    <meta property="og:url" content={url} key="og:url" />
                                    <meta property="og:title" content={page[0].attributes.seo.metaTitle} key="og:title" />
                                    <meta property="og:description" content={page[0].attributes.seo.metaDescription} key="og:description" />
                                    <meta property="og:image" content={''} key="og:image" />
                                    <link rel="canonical" href={url} />


                                    {page[0].attributes.seo.preventIndexing && (
                                        <>
                                            <meta name="robots" content="noindex"></meta>
                                            <meta name="googlebot" content="noindex"></meta>
                                        </>
                                    )}
                                </>
                            )}
                        </Head>
                        <Bio content={page[0].attributes.blocks[0].body} />
                        <Box sx={{ width: '100%', marginTop: 0 }}>
                            <h1 className="h1home">
                                {page[0].attributes.blocks[2].sectionHeader[1].title}
                            </h1>
                        </Box>

                        <Grid sx={{ display: "flex", alignContent: "space-around" }} container spacing={0}>
                            <ServiceView homeServices={homeServices} bgColor={theme.palette.primary.main} color={theme.palette.fourthly.main}  />
                        </Grid>

                        <Box sx={{ width: '100%', marginTop: 0 }}>
                            <h1 className="h1home">
                                {page[0].attributes.blocks[2].sectionHeader[2].title}
                            </h1>
                        </Box>
                        <ClientCarousel clientItems={page[0].attributes.blocks[3].files.data} />
                        <Divider sx={{ borderBottomWidth: 3 }} />
                        <Box
                            sx={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                marginTop: 2,
                                bgcolor: 'unset',
                                borderRadius: 1,
                            }}
                        >
                            <Box>
                                <h1>
                                    {page[0].attributes.blocks[2].sectionHeader[0].title}
                                </h1>
                            </Box>
                            <Link style={{ textDecoration: 'none' }}
                                href="/portfolio"
                            >
                                <StyledButton variant="outlined">  {page[0].attributes.blocks[2].action[0].title}</StyledButton>
                            </Link>
                        </Box>
                        <Grid container spacing={2}>
                            <ProjectView {...pageProps} />
                        </Grid>
                        <Divider sx={{ borderBottomWidth: 3 }} />
                        <Submission content={page[0].attributes.blocks[1]} />

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