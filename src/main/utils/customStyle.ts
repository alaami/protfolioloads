import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Select from '@mui/material/Select';
import { BorderAllRounded, BorderClearRounded, Margin } from "@mui/icons-material";

const StyledPaper = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.secondary.main,
  color: theme.palette.secondary.contrastText,
  marginBottom: theme.spacing(2),
  marginTop: theme.spacing(13),
  backgroundImage: 'url("/network.png")',
  backgroundSize: 'contain',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'top right'
}));

const StyledDiv = styled("div")(({ theme }) => ({
  padding: theme.spacing(2),
}));

const StyledCard = styled(Card)(() => ({
  display: 'flex',
}));
const StyledDivCard = styled("div")(() => ({
  flex: 1,
}));
const StyledLogo = styled("img")(({ theme }) => ({
  height: '50px!important',
  margin: 'auto auto'
}));

const StyledCardMedia = styled(CardMedia)(() => ({
  height: 650,
  width: 400,
  margin: 'auto',
}));
const StyledServiceCardMedia = styled(CardMedia)(() => ({
  height: 250,
  margin: 'auto',
}));


const StyledSliderCardMedia = styled(CardMedia)(({ theme }) => ({
  height: 400,
  paddingTop: 5,
  width: '100%',
  color: theme.palette.neutral.contrastText,
}));


const StyledMainGrid = styled(Grid)(({ theme }) => ({
  marginTop: theme.spacing(1),
}));

const StyledSliderBox = styled(Box)(() => ({
  display: 'flex',
  alignItems: 'flex-start',
  p: 1,
  m: 1,
  height: '100%',
}));
const StyledSliderContentBox = styled(Box)(({ theme }) => ({
  alignSelf: 'center',
  margin: 'auto',
  padding: 20,
  background: theme.palette.secondary.light,
  opacity:'0.5'
}));

const StyledPagePaper = styled(Paper)(({ theme }) => ({
  padding: 10,
  margin: 'auto',
  marginTop: 40,
  backgroundColor: theme.palette.neutral.main,
}));

const StyledButton = styled(Button)(({ theme }) => ({
  margin: 5,
  marginTop:45,
  background: theme.palette.primary.main,
  color: theme.palette.primary.contrastText,
  border: '1px solid' + theme.palette.secondary.contrastText,
  padding: 20,
  paddingLeft: 50,
  paddingRight: 50,
  ":hover": {
    background: theme.palette.tertiary.main,
    color: theme.palette.tertiary.contrastText,
    border: '1px solid' + theme.palette.primary.contrastText,
  }
}));

const StyledSelect = styled(Select)(() => ({
  width: 60,
}));
/*styled('div')({
  `
  button.is-active {
      background: $;
      color: #fff;

});*/
const LanguageSwitcherStyled = styled('div')(({ theme }) => ({
  marginRight:10,
  button: {
    "&.is-active": {
      background: theme.palette.primary.main,
      color: theme.palette.primary.contrastText,
      fontWeight: 'bold',
    },
    background: theme.palette.primary.light,
    color: theme.palette.primary.contrastText,
    BorderAllRounded:'0',
    ":hover": {
      background: theme.palette.tertiary.main,
      color: theme.palette.tertiary.contrastText,
      border: '1px solid' + theme.palette.primary.contrastText,
    }
  },
  marginBottom: 1,
}));
const StyledClientItem = styled("div")(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  background: theme.palette.neutral.main,
  margin: '15px',
  padding: '15px',
  fontSize: '4em',
}));

export { StyledClientItem, LanguageSwitcherStyled, StyledLogo, StyledSelect, StyledButton, StyledPagePaper, StyledCard, StyledCardMedia, StyledServiceCardMedia, StyledDiv, StyledPaper, StyledMainGrid, StyledDivCard, StyledSliderBox, StyledSliderCardMedia, StyledSliderContentBox }



