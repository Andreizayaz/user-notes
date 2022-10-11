import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles(() => ({
  root: {
    top: '90px !important',

    '& .MuiPaper-root': {
      top: '90px !important',
      padding: '30px',
      backgroundColor: '#1976d2'
    }
  }
}));
