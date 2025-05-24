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
        main: '#343DE2',
        light: '#8388EC',
        dark: 'rgb(36, 42, 158)',
        contrastText: '#000103',
        
      },
      secondary: {
        main: '#080B34',
        light: '#1D375D',
        dark: 'rgb(5, 7, 36)',
        contrastText:  '#C1C4F5',
      },
      tertiary: palette.augmentColor({
        color: {
          main: '#E28834',
          light:'#EA9643',
          contrastText:  'rgba(0, 0, 0, 0.87)',
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
        tertiary: PaletteColor;
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



