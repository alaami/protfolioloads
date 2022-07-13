import {Grid, Paper, Stack, Typography} from "@mui/material"
import { Box } from "@mui/system"
import CardMedia from '@mui/material/CardMedia';
import { StyledPaper } from "../../../../../main/utils/customStyle";
import { ThemeContext } from "@emotion/react";
import { customTheme } from "../../../../../main/utils/customTheme";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";

export const Bio = (props:any) => {
  return (
<StyledPaper elevation={0}>
<Grid container spacing={2} marginBottom={5}>
  <Grid item xs={12} md={6} lg={6} xl={6}   >
  <Paper sx={{margin:'auto', padding:5,marginBottom:5, marginTop:5, backgroundColor:customTheme.palette.secondary.main}} elevation={0}>
        <Stack>
        <Box>
        <ReactMarkdown rehypePlugins={[rehypeRaw]}children={props.content} />
          </Box>
        </Stack>
    </Paper>
  </Grid>
  <Grid item xs={12} md={6} lg={6} xl={6} >
    <Box  sx={{          display: 'flex',
          alignItems: 'flex-start',

          height:'100%'}}>
    <Paper sx={{margin:'auto',marginTop:5,backgroundColor:customTheme.palette.secondary.main}} elevation={0}>
    <CardMedia
        component="img"
        height="300"
        width="600"
        image="/business-home_1920.png"
        alt="bio"       
      />
    </Paper>
    </Box>
  </Grid>
</Grid>
</StyledPaper>
  )
}
