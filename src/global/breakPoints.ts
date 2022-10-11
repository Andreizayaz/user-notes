import { createTheme } from '@mui/material/styles';

declare module '@mui/material/styles' {
  interface BreakpointOverrides {
    xs: false;
    sm: false;
    md: false;
    lg: false;
    xl: false;
    mobile: true;
    tablet: true;
    laptop: true;
    desktop: true;
  }
}

const defaultTheme = createTheme();

export const theme = createTheme({
  breakpoints: {
    values: {
      ...defaultTheme.breakpoints.values,
      mobile: 420,
      tablet: 680,
      laptop: 1024,
      desktop: 1200
    }
  }
});
