import Typography from '@mui/material/Typography';
import { Box, Button, Grid, Paper, Stack } from '@mui/material';

const CardProject = ({ project }:any) => {
   const imageUrl =
    process.env.NODE_ENV !== "development"
      ? project.attributes.image.data.attributes.url
      : process.env.REACT_APP_BACKEND_URL + project.attributes.image.data.attributes.url;
  return (
    <Grid container spacing={2}>
    <Grid item xs={12} md={4}>
      <Paper elevation={0}>
          <Box sx={{padding:5, margin:'auto', marginTop:5  }}>
              <img src={imageUrl} alt="bio"/>
          </Box>
      </Paper>
    </Grid>
    <Grid item xs={12} md={8} >
    <Paper sx={{margin:'auto', padding:5,marginBottom:5, marginTop:5 }} elevation={0}>
          <Stack>
          <Box>
            <Typography gutterBottom variant="h5" component="div">
            {project.attributes.title}
            </Typography>
            <Typography variant="body1" color="text.secondary">
            {project.attributes.description}
            </Typography>
            <Button sx={{marginTop:4}} variant="outlined">DETAILS</Button>
          </Box>
          </Stack>
      </Paper>
    </Grid>
    </Grid>
  );
};

export default CardProject;