import { styled } from '@mui/material/styles';

import { LinkStyled } from 'src/components/styledComponents';

import { ImageLinkStyledTypes } from './types';

export const ImageLinkStyled = styled(LinkStyled)<ImageLinkStyledTypes>(
  ({ margin, height, backgroundRepeat, backgroundSize }) => ({
    margin: margin || '0',
    height: height || 'auto',
    backgroundRepeat: backgroundRepeat || 'no-repeat',
    backgroundSize: backgroundSize || 'cover'
  })
);
