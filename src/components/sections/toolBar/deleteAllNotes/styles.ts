import { makeStyles } from '@material-ui/core';

export const useBtnStyles = makeStyles(() => ({
  root: {
    color: 'rgba(210,134,147, .9)',
    textTransform: 'capitalize',
    fontSize: '16px',
    transition: 'all 1s',

    '&.MuiButton-root:hover': {
      backgroundColor: 'transparent'
    },

    '&:hover': {
      transform: 'scale(1.2)'
    }
  }
}));
