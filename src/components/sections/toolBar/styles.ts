import { makeStyles } from '@material-ui/core';
import { theme } from 'src/global';

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

export const useFlexStyles = makeStyles(() => ({
  flexStyles: {
    [theme.breakpoints.down('upperDesktop')]: {
      columnGap: '1px !important'
    },
    [theme.breakpoints.down('tablet')]: {
      rowGap: '10px !important'
    }
  }
}));
