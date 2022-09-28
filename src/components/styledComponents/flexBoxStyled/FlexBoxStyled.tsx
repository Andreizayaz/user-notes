import { styled } from '@mui/material/styles';

import { BaseBoxStyled } from 'src/components/styledComponents/baseBoxStyled';

import { FlexStyleProps } from './types';

export const FlexBoxStyled = styled(BaseBoxStyled)<FlexStyleProps>(
  ({ alignItems, justifyContent }) => ({
    display: 'flex',
    alignItems: alignItems || 'center',
    justifyContent: justifyContent || 'space-between'
  })
);
