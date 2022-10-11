import { makeStyles } from '@material-ui/core';
import { theme } from 'src/global';

export const useFlexStyles = makeStyles(() => ({
  flexStyle: {
    [theme.breakpoints.down('tablet')]: {
      order: 2,
      width: '45% !important'
    }
  }
}));
