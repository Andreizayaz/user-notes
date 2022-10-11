import { makeStyles } from '@material-ui/core';

import { theme } from 'src/global';

export const useStyles = makeStyles(() => ({
  nav: {
    width: '35%',
    minWidth: 'fit-content',
    marginLeft: 'auto'
  },
  linksList: {
    [theme.breakpoints.down('mobile')]: {
      flexDirection: 'column'
    }
  }
}));
