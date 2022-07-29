import { createTheme } from "@mui/material/styles";
import { orange } from "@mui/material/colors";
const customTheme = createTheme({
    palette: {
      primary: {
        main: '#80cbc4',
        contrastText: '#fff',
      },
      secondary: {
        main: '#D4F1F4',
        contrastText: '#000',
      },
      neutral: {
        main: '#64748B',
        contrastText: '#fff',
      },
      footer: {
        main: '#000',
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
      }
      interface PaletteOptions {
        neutral: PaletteOptions['primary'];
        footer: PaletteOptions['primary'];
      }
    // allow configuration using `createTheme`
    interface ThemeOptions {
      status?: {
        danger?: string;
      };
      
    }
  }
  export {customTheme}



