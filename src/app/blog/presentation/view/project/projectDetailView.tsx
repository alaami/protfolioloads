import { useEffect } from "react";
import { useProjectViewModel } from "../../controller/projectViewModel";
import { useProjectStoreImplementation } from "../../../data/repositories/projectStoreImplementation";
import { useParams } from "react-router-dom";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Button from '@mui/material/Button';
import Divider from "@mui/material/Divider";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import {StyledCard,StyledCardMedia,StyledPaper,StyledMainGrid, StyledDivCard,StyledSliderBox,StyledSliderCardMedia,StyledSliderContentBox} from  "../../../../../main/utils/customStyle"; 


const ProjectDetailView = () => {
    const store = useProjectStoreImplementation ();
    const {
        getProjectsDetails,
        project,
        isLoadingSingleProject,

    } = useProjectViewModel(store);
    let { slug } = useParams();
   useEffect(()=>{
      if(slug!=undefined)
      getProjectsDetails(slug);
    },[getProjectsDetails]);
    let imageUrl:string ='';
    if(project!=undefined){
         imageUrl = project[0].attributes.image.data.attributes.url;
    }
  
    return(
      <Stack>
        {
        
        isLoadingSingleProject ? (
            <h1>Loading project details...</h1>
        ):
        (project!=undefined)  && (    
          <>
            <StyledPaper>
              <Grid container>
                <Grid item md={12}>
                <StyledSliderCardMedia
                        image={project[0].attributes.cover.data.attributes.url}
                      >
                    <StyledSliderBox>
                      <StyledSliderContentBox>
                      <Typography variant="h2" component="div"  align="center" gutterBottom>
                      {project[0].attributes.title}
                      </Typography>
                      </StyledSliderContentBox>
                    </StyledSliderBox>
                  </StyledSliderCardMedia>
                </Grid>
              </Grid>
            </StyledPaper>
            
            <Grid container spacing={4}>
              {
              (project[0].attributes.blocks[1]!=undefined) && (project[0].attributes.blocks[1].files.data!=null) && (
              project[0].attributes.blocks[1].files.data.map(slide => (                   
                <Grid item key={slide.attributes.name} xs={12} md={4}>
                  <StyledCard elevation={0}>
                    <StyledDivCard>                     
                      <StyledCardMedia
                        image={ slide.attributes.url}
                      >
                      </StyledCardMedia>
                    </StyledDivCard>
                  </StyledCard>
                </Grid>
              )))
              
            }
            </Grid>
            <StyledMainGrid container spacing={4}>
            {/* Main content */}
            <Grid item xs={12} md={8}>
              <Typography variant="h6" gutterBottom>
              {project[0].attributes.title}
              </Typography>
              <Divider />
                <ReactMarkdown>
                {
                (project[0].attributes.blocks[0]!=undefined) ? (
                project[0].attributes.blocks[0].body):''
                }
                </ReactMarkdown>
            </Grid>
            {/* End main content */}
            {/* Sidebar */}
            <Grid item xs={12} md={4}>
              <Paper elevation={0}>
                <Typography variant="h6" gutterBottom>
                  About
                </Typography>
                <Typography>
                 {project[0].attributes.description}
                </Typography>
              </Paper>
              <Typography variant="h6" gutterBottom>
                Technos
              </Typography>
              {
              (project[0].attributes.blocks[2]!=undefined) && (
              project[0].attributes.blocks[2].buttons.map(button => (
              <Button sx={{marginLeft:1, marginTop:1}} key={button.title} variant="contained" color="primary">
                 {button.title}
              </Button>
                
              )))}
            </Grid>
            {/* End sidebar */}
          </StyledMainGrid>
            </>

         )
        }
         </Stack>
    );
};

export default ProjectDetailView;
