import ArticlesView from "../article/articleView";
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import ServiceView from "../service/serviceView";
import ProjectView from "../project/projectView";
import Grid  from "@mui/material/Grid";
import { Bio } from "../components/bio";
import { Button, Divider, Link, Stack } from "@mui/material";

const HomeView = () => {

    return(
        <div className="App">

            <Container fixed>
                <Bio />
                <Divider/>
                <Box
                    sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    p: 1,
                    m: 1,
                    bgcolor: 'background.paper',
                    borderRadius: 1,
                    }}
                >  

                <Box>          
                   <Link href="#" underline="hover">
                    LATEST WORKS
                    </Link>
                    <Typography variant="h6" component="div" align="center" gutterBottom>
                    Our Case Studies
                    </Typography> 
                </Box>                   
                <Button sx={{marginTop:4}} variant="outlined">ALL CASES STUDIES </Button>
                </Box>
                <Grid  container spacing={2}>
                <ProjectView />
                </Grid>
                <Divider/>
                <Box sx={{ width: '100%', maxWidth: 500, margin:'auto', marginTop:5  }}>
                <Typography variant="h6" component="div" align="center" gutterBottom>
                OUR SERVICES
                </Typography>
                </Box>
                <Grid  container spacing={2}>
                <ServiceView />
                </Grid>
                <Divider sx={{marginBottom:5}}/>
                <Box
                    sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    p: 1,
                    m: 1,
                    bgcolor: 'background.paper',
                    borderRadius: 1,
                    }}
                > 
                <Box>          
                   <Link href="#" underline="hover">
                    LATEST Articles
                    </Link>
                    <Typography variant="h6" component="div" align="center" gutterBottom>
                    What's new
                    </Typography> 
                </Box>  
                <Box sx={{ alignItems: 'flex-start' }}>                 
                <Button sx={{marginTop:4}} variant="outlined">ALL Articles</Button>
                </Box>
                </Box>
                <ArticlesView /> 
            </Container>
        </div>
    );
};
export default HomeView;