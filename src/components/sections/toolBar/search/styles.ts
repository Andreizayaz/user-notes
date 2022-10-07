import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles(() => ({
  text: {
    padding: '20px',
    color: 'white',
    textAlign: 'center',
    backgroundColor: 'rgba(25, 118, 210, .7)'
  },
  list: {
    position: 'absolute',
    top: 0,
    left: 0,
    zIndex: 1,
    marginTop: '10px',
    minWidth: '300px',
    maxHeight: '200px',
    overflowY: 'auto',
    backgroundColor: 'rgba(25, 118, 210, .7)'
  },
  link: {
    height: '100%',
    width: '100%',
    color: 'white',
    transition: 'all 1s',
    '&:hover': {
      color: '#FFD67F'
    }
  }
}));
