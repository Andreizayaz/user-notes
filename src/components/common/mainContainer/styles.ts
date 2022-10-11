import { makeStyles } from '@material-ui/core';
import { theme } from 'src/global';

export const useStyles = makeStyles(() => ({
  flexStyle: {
    [theme.breakpoints.down('tablet')]: {
      rowGap: '20px !important'
    }
  },
  subHeadingSection: {
    color: 'rgba(210,134,147, .9)',
    textAlign: 'center'
  },
  heading: {
    fontWeight: 700,

    [theme.breakpoints.down('tablet')]: {
      fontSize: '28px'
    }
  }
}));
