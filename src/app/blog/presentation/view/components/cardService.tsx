import React from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Box, CardActionArea, Paper, Stack } from '@mui/material';
import Icon from '@mui/material/Icon';
import { useTheme } from '@mui/material/styles';

const CardService = (serviceProps:any) => {
   //const imageUrl = service.attributes.image.data.attributes.url;
   const theme = useTheme();
   const service=serviceProps.service;
   const bgColor=serviceProps.bgcolor;
   const color=serviceProps.color;
  return (
   <Stack>
      <Card sx={{ padding:1,backgroundColor:'unset'}} elevation={0}>
        <Paper sx={{width: '80%', margin:'auto', marginBottom: 1, textAlign:'center', height:150,backgroundColor:'unset'}} elevation={0} >
            <h2 id="h2service">
              {service.attributes.title}
            </h2>
            <Typography variant="body2" color="text.secondary" style={{float:"left", fontSize:18}}>
              {service.attributes.description}
            </Typography>   
       </Paper>

    <Box sx={{ 
      
      width: '15rem',
      height: '15rem',
      margin: 'auto',
      backgroundColor:bgColor,
      borderRadius: '50%'
      ,display: 'flex'}}>
        
        <Box sx={{  border: 3,
          borderColor:'unset',
          width: '14rem',
          height: '14rem',
          backgroundColor:bgColor,
          color:color,
          borderRadius: '50%',
          margin: 'auto',
          marginTop: '0.3rem',display: 'flex', alignItems: 'center',justifyContent:'center' }}>
          <Icon sx={{ fontSize: '150px !important' }}>{service.attributes.icon}</Icon>              
          </Box>
     </Box>
     </Card>
    </Stack>
  );
};

export default CardService;