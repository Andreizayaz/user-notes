import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles(() => ({
  heading: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    fontWeight: 700
  },
  icon: {
    marginLeft: '10px',
    height: '30px !important',
    width: '30px !important'
  },
  smileIcon: {
    height: '20px !important',
    width: '20px !important',
    color: '#FFD67F'
  },
  link: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    transition: 'all 1s',
    margin: '50px 0',
    color: 'rgba(210,134,147, .9)',
    textAlign: 'center',
    fontSize: '20px',
    fontWeight: 700,
    '&:hover': {
      color: '#FFD67F'
    }
  }
}));
