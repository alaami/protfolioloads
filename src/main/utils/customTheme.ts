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
      }
      interface PaletteOptions {
        neutral: PaletteOptions['primary'];
      }
    // allow configuration using `createTheme`
    interface ThemeOptions {
      status?: {
        danger?: string;
      };
      
    }
  }
  export {customTheme}



