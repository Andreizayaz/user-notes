import { Button } from '@mui/material';
import { styled } from '@mui/material/styles';

import { ButtonStyleTypes } from './types';

export const BaseButtonStyled = styled(Button)<ButtonStyleTypes>(
  ({ color, fontSize, backgroundColor }) => ({
    color: color || 'white',
    fontSize: fontSize || '14px',
    backgroundColor: backgroundColor || '#1976d2',
    transition: 'all 1s',

    '&:disabled': {
      color: 'white',
      backgroundColor: 'rgba(25, 118, 210, 0.5)'
    }
  })
);
