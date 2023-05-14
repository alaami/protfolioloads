import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { useState } from 'react';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import MailOutline from '@mui/icons-material/MailOutline';
import PhoneAndroid from '@mui/icons-material/PhoneAndroid';
import WhatsApp from '@mui/icons-material/WhatsApp';
import Copyright from '@mui/icons-material/Copyright';
import React from "react";
import { useTheme } from '@mui/material/styles';
export default function Footer() {
const theme = useTheme();
  const [value, setValue] = useState(0);

  return (
    <Box
    sx={{
    display: 'flex',
    justifyContent: 'space-between',
    p: 1,
    pl:10,
    pr:10,
    m: 1,
    bgcolor:theme.palette.footer.main,
    color:theme.palette.thirdly.main,
    borderRadius: 1,
    }}
    >
            <Grid  container spacing={2}>
                <Grid item xs={12} md={3}>
                    <Box sx={{margin: 'auto', padding:1 }}>
                        <Typography variant="body2" component="div" align="left" gutterBottom>
                        <Copyright />  2022 LoadStar | All right reserved
                        </Typography>
                    </Box>
                </Grid> 
                <Grid item xs={12} md={3}>
                <Box sx={{margin: 'auto', padding:1 }}>
                        <Typography variant="body2" component="div" align="left" gutterBottom>
                        <PhoneAndroid />  (+1) 514 572 8805 <br/>
                        <WhatsApp />  (+1) 514 572 8805
                        </Typography>
                    </Box>
                </Grid> 
                <Grid item xs={12} md={3}>
                    <Box sx={{margin: 'auto', padding:1 }}>
                    
                        <Typography variant="body2" component="div" align="left" gutterBottom>
                        <MailOutline />  info@loadstartech.com
                        </Typography>
                    </Box>
                </Grid> 
                <Grid item xs={12} md={3}>
                    <Box sx={{margin: 'auto', padding:1 }}>
                    
                        <Typography variant="body2" component="div" align="left" gutterBottom>
                        <LocationOnIcon />  ON, Canada
                        </Typography>
                    </Box>
                </Grid> 
            </Grid>  
    </Box>
  );
}
