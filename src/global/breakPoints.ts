import { createTheme } from '@mui/material/styles';

declare module '@mui/material/styles' {
  interface BreakpointOverrides {
    xs: false;
    sm: false;
    md: false;
    lg: false;
    xl: false;
    mobile: true;
    upperMobile: true;
    tablet: true;
    upperTablet: true;
    laptop: true;
    desktop: true;
    upperDesktop: true;
  }
}

const defaultTheme = createTheme();

export const theme = createTheme({
  breakpoints: {
    values: {
      ...defaultTheme.breakpoints.values,
      mobile: 420,
      upperMobile: 500,
      tablet: 680,
      upperTablet: 900,
      laptop: 1024,
      desktop: 1200,
      upperDesktop: 1300
    }
  }
});
