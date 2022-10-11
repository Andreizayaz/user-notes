import { makeStyles } from '@material-ui/core';
import { theme } from 'src/global';

export const useStyles = makeStyles(() => ({
  flexStyle: {
    [theme.breakpoints.down('tablet')]: {
      order: 3,
      width: '45% !important'
    }
  },
  text: {
    padding: '20px',
    color: 'white',
    textAlign: 'center',
    backgroundColor: 'rgba(25, 118, 210, .7)'
  },
  list: {
    position: 'absolute',
    top: 0,
    left: 0,
    zIndex: 1,
    marginTop: '10px',
    minWidth: '100%',
    maxHeight: '200px',
    overflowY: 'auto',
    backgroundColor: 'rgba(25, 118, 210, .7)'
  },
  link: {
    height: '100%',
    width: '100%',
    color: 'white',
    transition: 'all 1s',
    '&:hover': {
      color: '#FFD67F'
    }
  },
  inputField: {
    [theme.breakpoints.down('upperTablet')]: {
      width: '100% !important'
    }
  },
  searchBtn: {
    [theme.breakpoints.down('upperTablet')]: {
      margin: '0 auto !important'
    }
  }
}));
