import { makeStyles } from '@material-ui/core';
import { theme } from 'src/global';

export const useFlexStyles = makeStyles(() => ({
  flexStyle: {
    [theme.breakpoints.down('tablet')]: {
      order: 1,
      width: '100% !important'
    }
  }
}));
