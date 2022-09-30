import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles(() => ({
  footer: {
    backgroundColor: '#1976d2'
  },
  link: {
    color: 'white',
    fontSize: '18px',
    transition: 'all 1s',
    '&:hover': {
      color: '#FFD67F',
      textDecoration: 'none'
    }
  }
}));
