import {styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import  Button  from "@mui/material/Button";
import Select from '@mui/material/Select';

const StyledPaper = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.primary.contrastText,
  marginBottom: theme.spacing(2),
  marginTop: theme.spacing(13),
}));

const StyledDiv = styled("div")(({ theme }) => ({
  padding: theme.spacing(2),
}));

const StyledCard= styled(Card)(() => ({
  display: 'flex',
}));
const StyledDivCard = styled("div")(() => ({
  flex: 1,
}));
const StyledLogo = styled("img")(() => ({
  height: '80px!important',
  marginBottom:2,
}));

const StyledCardMedia= styled(CardMedia)(() => ({
  height:650,
  width: 400,
  margin: 'auto',
}));
const StyledServiceCardMedia= styled(CardMedia)(() => ({
  height:250,
  margin: 'auto',
}));


const StyledSliderCardMedia= styled(CardMedia)(({theme}) => ({
  height:400,
  paddingTop:5,
  width: '100%',
  color: theme.palette.primary.contrastText,
}));


const StyledMainGrid= styled(Grid)(({theme}) => ({
  marginTop: theme.spacing(1),
}));

const StyledSliderBox= styled(Box)(() => ({
  display: 'flex',
  alignItems: 'flex-start',
  p: 1,
  m: 1,
  height:'100%',
}));
const StyledSliderContentBox= styled(Box)(() => ({
  alignSelf: 'center',
  margin:'auto',
  padding:20, 
  background:'rgba(200,230,230,0.8)',
}));

const StyledPagePaper= styled(Paper)(({theme}) => ({
  padding:10, 
  margin:'auto',
  marginTop:40,
  backgroundColor: theme.palette.primary.main,
}));

const StyledButton= styled(Button)(({theme}) => ({
  margin:5,
  color: theme.palette.secondary.contrastText,
  border: '1px solid'+theme.palette.secondary.contrastText,
  padding:20,
  paddingLeft:50,
  paddingRight:50,
  ":hover":{
    border: '1px solid'+theme.palette.primary.contrastText,
  }
})); 

const StyledSelect= styled(Select)(() => ({
  width:60,
}));
/*styled('div')({
  `
  button.is-active {
      background: $;
      color: #fff;

});*/
const LanguageSwitcherStyled = styled('div')(({theme}) => ({
  button: {
    "&.is-active": {
      background:theme.palette.primary.main,
      color: theme.palette.primary.contrastText,
      fontWeight:'bold',
    },
    background:theme.palette.fourthly.main,
    color: theme.palette.fourthly.contrastText,
  },
  marginBottom:1,
}));
const StyledClientItem = styled("div")(({theme}) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  background:theme.palette.neutral.main,
  margin: '15px',
  padding:'15px',
  fontSize: '4em',
}));

export {StyledClientItem,LanguageSwitcherStyled, StyledLogo, StyledSelect,StyledButton,StyledPagePaper,StyledCard,StyledCardMedia, StyledServiceCardMedia,StyledDiv,StyledPaper,StyledMainGrid, StyledDivCard,StyledSliderBox,StyledSliderCardMedia,StyledSliderContentBox}



