import {Button, Grid, Paper, Stack, Typography} from "@mui/material"
import { Box } from "@mui/system"
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import { StyledButton } from "../../../../../main/utils/customStyle";

export const Submission = (props:any) => {
  return (
    <Box
    sx={{
    display: 'flex',
    justifyContent: 'space-between',
    bgcolor: 'background.paper',
    borderRadius: 1,
    }}
> 
  <Paper sx={{ width:'50%',margin:'auto', marginTop:2, marginBottom:2}} elevation={0}>
        <Stack>
        <Box>
          <Typography gutterBottom variant="h2" component="div" align="center">
          {props.content.title}
          </Typography>

          <Typography variant="body1" color="text.secondary" align="center">
          {props.content.description}
          </Typography>
          <Box sx={{ margin: 'auto' , width:'30%'}}>
          <StyledButton variant="outlined" startIcon={<MailOutlineIcon />}>{props.content.action.title}</StyledButton>
          </Box>
          </Box>
        </Stack>
    </Paper>
    </Box>
  )
}
