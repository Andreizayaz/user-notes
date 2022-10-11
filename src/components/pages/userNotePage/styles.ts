import { makeStyles } from '@material-ui/core';
import { theme } from 'src/global';

export const useStyles = makeStyles(() => ({
  root: {
    margin: '0 auto',
    marginTop: '30px',
    width: '50%',
    minWidth: '320px',

    [theme.breakpoints.down('upperDesktop')]: {
      padding: '30px',
      width: '80%'
    },

    [theme.breakpoints.down('tablet')]: {
      padding: '30px',
      width: '100%'
    }
  }
}));
