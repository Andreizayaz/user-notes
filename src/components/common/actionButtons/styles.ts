import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles(() => ({
  root: {
    width: 'fit-content',
    height: 'fit-content',
    padding: '0',
    minWidth: 'fit-content',
    transition: 'all 1s',

    '&:hover': {
      transform: 'scale(1.2)',
      backgroundColor: 'transparent'
    }
  },
  edit: {
    color: 'rgba(255,206,28,.7)'
  },
  del: {
    color: 'rgba(235,94,63,.7)'
  }
}));
