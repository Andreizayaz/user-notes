import { theme } from 'src/global/breakPoints';
import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles(() => ({
  appBar: {
    position: 'static',
    backgroundColor: '#1976d2'
  },
  imgLink: {
    position: 'relative',
    marginRight: 'auto',
    height: '50px !important',
    width: '50px !important',
    border: 'none !important',
    backgroundImage: `url(${window.location.origin + '/user-notes-icon.png'})`,
    '&:hover': { transform: 'scale(1.1)' },

    [theme.breakpoints.down('mobile')]: {
      marginLeft: 'auto !important'
    }
  },
  burgerBtn: {
    [theme.breakpoints.up('mobile')]: {
      display: 'none'
    },
    [theme.breakpoints.down('mobile')]: {
      display: 'block',
      position: 'absolute',
      zIndex: 1500
    }
  },
  navLinks: {
    [theme.breakpoints.down('mobile')]: {
      display: 'none'
    }
  }
}));
