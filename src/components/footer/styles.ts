import { makeStyles } from '@material-ui/core';
import { theme } from 'src/global';

export const useStyles = makeStyles(() => ({
  footer: {
    backgroundColor: '#1976d2'
  },
  flex: {
    [theme.breakpoints.down('upperMobile')]: {
      flexDirection: 'column',
      rowGap: '20px !important'
    }
  },
  link: {
    color: 'white',
    fontSize: '18px',
    transition: 'all 1s',
    '&:hover': {
      color: '#FFD67F',
      textDecoration: 'none'
    }
  }
}));
