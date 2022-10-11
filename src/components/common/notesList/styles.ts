import { makeStyles } from '@material-ui/core';
import { theme } from 'src/global';

export const useListStyles = makeStyles(() => ({
  list: {
    [theme.breakpoints.down('upperDesktop')]: {
      justifyContent: 'space-between !important',
      rowGap: '10px !important'
    }
  },
  listItem: {
    alignSelf: 'stretch',
    width: '33%',
    transition: 'all 1s',

    [theme.breakpoints.down('upperDesktop')]: {
      width: '49%'
    },

    [theme.breakpoints.down('upperMobile')]: {
      width: '100%'
    }
  }
}));
