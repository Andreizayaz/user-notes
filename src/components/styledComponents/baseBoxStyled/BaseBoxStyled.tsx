import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';

import { StyledBoxTypes } from './types';

export const BaseBoxStyled = styled(Box)<StyledBoxTypes>(
  ({ margin, padding, width }) => ({
    margin: margin || '0',
    padding: padding || '0',
    width: width || 'auto',
    transition: 'all 1s'
  })
);
