import { Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

import { StyledTextTypes } from './types';

export const BaseTextStyled = styled(Typography)<StyledTextTypes>(
  ({ color, fontSize }) => ({
    color: color || 'black',
    fontSize: fontSize || '18px'
  })
);
