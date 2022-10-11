import { makeStyles } from '@material-ui/core';
import { theme } from 'src/global';

export const useStyles = makeStyles(() => ({
  root: {
    margin: '0 auto',
    padding: '20px 10px',
    width: '80%',
    maxWidth: '1400px',

    [theme.breakpoints.down('upperTablet')]: {
      width: '90%'
    }
  }
}));
