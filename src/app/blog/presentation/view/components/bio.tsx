import {Grid, Paper, Stack, Typography} from "@mui/material"
import { Box } from "@mui/system"

export const Bio = () => {
  return (
<Grid container spacing={2} marginBottom={5}>
  <Grid item xs={12} md={8} >
  <Paper sx={{margin:'auto', padding:5,marginBottom:5, marginTop:5 }} elevation={0}>
        <Stack>
        <Box>
          <Typography gutterBottom variant="h5" component="div">
          Lorem ipsum dolor 
          </Typography>

          <Typography variant="body1" color="text.secondary">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
           in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
            sunt in culpa qui officia deserunt mollit anim id est laborum.
          </Typography>
          </Box>
        </Stack>
    </Paper>
  </Grid>
  <Grid item xs={12} md={4}>
    <Paper elevation={0}>
        <Box sx={{ width: '100%', height: 420, margin:'auto', marginTop:5  }}>
            <img src="/bio.png" alt="bio"/>
        </Box>
    </Paper>
  </Grid>
</Grid>
  )
}
