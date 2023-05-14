import { createTheme, PaletteColor } from "@mui/material/styles";
import { orange } from "@mui/material/colors";


const { palette } = createTheme();
const customTheme = createTheme({
    palette: {
      primary: {
        main: '#097392',
        contrastText: '#FFF0CE',
      },
      secondary: {
        main: '#83B4B3',
        contrastText:  '#FFF0CE',
      },
      thirdly: palette.augmentColor({
        color: {
          main: '#FFF0CE',
          contrastText:  '#383838',
        }, }),
        fourthly: palette.augmentColor({
          color: {
            main: '#D55534',
            contrastText: '#383838',
          }, }),
      neutral: {
        main: '#64748B',
        contrastText: '#fff',
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



