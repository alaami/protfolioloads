import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { useState } from 'react';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import MailOutline from '@mui/icons-material/MailOutline';
import PhoneAndroid from '@mui/icons-material/PhoneAndroid';
import Copyright from '@mui/icons-material/Copyright';
import { customTheme } from '../../../../../main/utils/customTheme';

export default function Footer() {
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
    bgcolor:customTheme.palette.footer.main,
    color:customTheme.palette.footer.contrastText,
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
                        <PhoneAndroid />  (+1) 818 751 7877
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
