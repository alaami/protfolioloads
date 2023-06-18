import { Paper, Stack, Typography} from "@mui/material"
import { Box } from "@mui/system"
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import { StyledButton } from "../../../../../main/utils/customStyle";
import React from "react";
import { useTheme } from "@mui/material/styles";
export const Submission = (props:any) => {
  const theme = useTheme();
  return (
    
    <Box
    sx={{
    display: 'flex',
    justifyContent: 'space-between',
    bgcolor: 'unset',
    borderRadius: 1,
    }}
> 
  <Paper sx={{ width:'50%',margin:'auto', marginTop:2, marginBottom:2, bgcolor:'unset'}} elevation={0}>
        <Stack>
        <Box>
          <h1 id="h1submit">
          {props.content.title}
          </h1>
          
          <Typography variant="body1" color="text.secondary" align="center">
          {props.content.description}
          </Typography>
          <Box sx={{ margin: 'auto' , width:'30%'}}>
          <StyledButton variant="outlined" startIcon={<MailOutlineIcon />} onClick={() => window.location.href = 'mailto:info@fititsolution.com'}>{props.content.action.title}</StyledButton>
          </Box>
          </Box>
        </Stack>
    </Paper>
    </Box>
  )
}
