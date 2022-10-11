import { makeStyles } from '@material-ui/core';

export const useNoteCardStyles = makeStyles(() => ({
  root: {
    '& .MuiTypography-h5': {
      color: 'rgba(210,134,147, .9)',
      textTransform: 'capitalize',
      fontSize: '28px',
      fontWeight: 700
    }
  },

  noteCard: {
    padding: '10px',
    height: '100%'
  }
}));
