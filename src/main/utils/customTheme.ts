import { createTheme, PaletteColor } from "@mui/material/styles";
import { orange } from "@mui/material/colors";
import "@fontsource/monda"; 

const { palette } = createTheme();
const customTheme = createTheme({
  typography: {
    fontFamily: 
      '"monda"',
  },
    palette: {
      primary: {
      //  main: '#097392',
      //contrastText: '#FFF0CE',
        main: '#D7CEC7',
        contrastText: '#000',
      },
      secondary: {
        main: '#565656',
        contrastText:  '#76323F',
      },
      thirdly: palette.augmentColor({
        color: {
          main: '#76323F',
          contrastText:  '#fff',
        }, }),
        fourthly: palette.augmentColor({
          color: {
            main: '#C09F80',
            contrastText: '#fff',
          }, }),
      neutral: {
        main: '#fff',
        contrastText: '#000',
      },
      footer: {
        main: '#383838',
        contrastText: '#fff',
      },
  
    },
    status: {
      danger: orange[500],
    },
  }
  );

declare module '@mui/material/styles' {
    interface Theme {
      status: {
        danger: string;
      };
    }
      interface Palette {
        neutral: Palette['primary'];
        footer: Palette['primary'];
        thirdly: PaletteColor;
        fourthly: PaletteColor;
        
      }
      interface PaletteOptions {
        neutral: PaletteOptions['primary'];
        footer: PaletteOptions['primary'];
        thirdly: PaletteColor;
        fourthly: PaletteColor;
      }
    // allow configuration using `createTheme`
    interface ThemeOptions {
      status?: {
        danger?: string;
      };
      
    }
  }
  export {customTheme}



