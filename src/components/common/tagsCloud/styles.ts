import { makeStyles } from '@material-ui/core';
import { theme } from 'src/global';

export const useStyles = makeStyles(() => ({
  tag: {
    position: 'relative',
    borderRadius: '5px',
    '&:hover button': { display: 'block' },
    cursor: 'pointer',

    [theme.breakpoints.down('tablet')]: {
      padding: '5px !important'
    }
  },
  btn: {
    position: 'absolute',
    top: '3px',
    right: '3px',
    display: 'none',
    marginLeft: 'auto',
    padding: '0',
    height: 'fit-content',
    minHeight: 'fit-content',
    width: 'fit-content',
    minWidth: 'fit-content',
    lineHeight: 1,
    transition: 'all 1s'
  },
  closeIcon: {
    '&&': {
      height: '10px',
      width: '10px',
      color: 'red',
      transition: 'all 1s',
      '&:hover': {
        transform: 'rotate(180deg)'
      }
    }
  }
}));
