import Typography from '@mui/material/Typography';
import { Box, Divider, Grid, Paper, Stack } from '@mui/material';
import { StyledButton } from '../../../../../main/utils/customStyle';
import { useTheme } from '@mui/material/styles';
import Link from 'next/link';
import React from "react";
const CardProject = ({ project }:any) => {
   const imageUrl = project.attributes.image.data.attributes.url;
   const theme = useTheme();
  return (
    <Grid container spacing={2} sx={{margin:'auto', padding:2, marginTop:2 }} >
    <Grid item xs={12} md={4} >
      <Paper elevation={0}>
          <Box sx={{padding:2, margin:'auto', marginTop:1, bgcolor:theme.palette.thirdly.main }}>
              <img src={imageUrl} alt={project.attributes.title}/>
          </Box>
     </Paper>
     
    </Grid>
    <Grid item xs={12} md={8} >
    <Paper sx={{margin:'auto', padding:2,marginBottom:5, marginTop:2, bgcolor:theme.palette.thirdly.main }} elevation={0}>
          <Stack>
          <Box sx={{ display: 'flex',flexDirection: 'column'}}>
            <Box>
            <h2>
            {project.attributes.title}
            </h2>
            </Box>
            <Box height='150px' padding={1}>
            <Typography variant="body1" color="text.secondary">
            {project.attributes.description}
            </Typography>
            </Box>
            <Box>
            <Link style={{ textDecoration: 'none' }}
            href={`/project/${project.attributes.slug}`}
            >
               <StyledButton variant="outlined" >DETAILS</StyledButton>
            </Link>
            </Box>
          </Box>

          </Stack>
      </Paper>
    </Grid>
    </Grid>
   
  );
};

export default CardProject;