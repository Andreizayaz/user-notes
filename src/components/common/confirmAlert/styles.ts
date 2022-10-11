import { makeStyles } from '@material-ui/core';
import { theme } from 'src/global';

export const useAlertStyles = makeStyles(() => ({
  root: {
    position: 'absolute',
    top: '0',
    zIndex: 1110,
    left: '50%',
    padding: '20px',
    width: '70% !important',
    transform: ' translateX(-50%)',

    [theme.breakpoints.down('tablet')]: {
      width: '90% !important'
    },

    [theme.breakpoints.down('upperMobile')]: {
      width: '100% !important'
    }
  },
  alert: {
    display: 'flex',
    justifyContent: 'center',
    width: '70%',

    [theme.breakpoints.down('upperTablet')]: {
      width: '90%'
    },

    [theme.breakpoints.down('tablet')]: {
      width: '100%'
    }
  },
  btn: {
    color: 'rgb(95, 33, 32)',
    borderColor: 'rgb(95, 33, 32)',
    transition: 'all 1s'
  }
}));
