import { makeStyles } from '@material-ui/core';

export const useAlertStyles = makeStyles(() => ({
  root: {
    position: 'absolute',
    top: '0',
    zIndex: 1110,
    left: '50%',
    padding: '20px',
    width: '70%',
    transform: ' translateX(-50%)'
  },
  alert: {
    display: 'flex',
    justifyContent: 'center',
    width: '70%'
  },
  btn: {
    color: 'rgb(95, 33, 32)',
    borderColor: 'rgb(95, 33, 32)',
    transition: 'all 1s'
  }
}));
