import { NavLink } from 'react-router-dom';

import { styled } from '@mui/material/styles';

import { LinkStyleTypes } from './types';

export const LinkStyled = styled(NavLink)<LinkStyleTypes>(
  ({ display, width, color, fontSize, fontWeight, hoverColor }) => ({
    display: display || 'block',
    width: width || 'fit-content',
    color: color || 'white',
    fontSize: fontSize || '20px',
    fontWeight: fontWeight || '700',
    '&:hover': { color: hoverColor || '#FFD67F' },
    transition: 'all 1s'
  })
);
