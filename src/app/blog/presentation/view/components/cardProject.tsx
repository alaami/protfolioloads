import Typography from '@mui/material/Typography';
import { Box, Button, Grid, Paper, Stack } from '@mui/material';
import { Link } from "react-router-dom";
import { StyledButton } from '../../../../../main/utils/customStyle';

const CardProject = ({ project }:any) => {
   const imageUrl =
    process.env.NODE_ENV !== "development"
      ? project.attributes.image.data.attributes.url
      : process.env.REACT_APP_BACKEND_URL + project.attributes.image.data.attributes.url;
  return (
    <Grid container spacing={2}>
    <Grid item xs={12} md={4}>
      <Paper elevation={0}>
          <Box sx={{padding:2, margin:'auto', marginTop:1  }}>
              <img src={imageUrl} alt="bio"/>
          </Box>
      </Paper>
    </Grid>
    <Grid item xs={12} md={8} >
    <Paper sx={{margin:'auto', padding:2,marginBottom:5, marginTop:1 }} elevation={0}>
          <Stack>
          <Box>
            <Typography gutterBottom variant="h5" component="div">
            {project.attributes.title}
            </Typography>
            <Typography variant="body1" color="text.secondary">
            {project.attributes.description}
            </Typography>
            <Link style={{ textDecoration: 'none' }}
            to={`/project/${project.attributes.slug}`}
            >
               <StyledButton variant="outlined" >DETAILS</StyledButton>
            </Link>
           
          </Box>
          </Stack>
      </Paper>
    </Grid>
    </Grid>
  );
};

export default CardProject;