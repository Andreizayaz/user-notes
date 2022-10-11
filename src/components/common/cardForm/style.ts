import { makeStyles } from '@material-ui/core';
import { theme } from 'src/global';

export const useCardFormStyles = makeStyles(() => ({
  card: {
    padding: '20px',
    width: '50%',

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
