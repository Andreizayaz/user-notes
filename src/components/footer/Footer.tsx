import { FC, ReactElement } from 'react';

import { Box, Link } from '@material-ui/core';

import { Container } from 'src/components/common';
import {
  FlexBoxStyled,
  BaseBoxStyled,
  BaseTextStyled
} from 'src/components/styledComponents';

import {
  APP_NAME,
  AUTHOR_NAME,
  PUBLISHED_YEAR,
  GITHUB_LINK
} from 'src/constants';

import { useFooterStyles } from 'src/global/styles';

export const Footer: FC = (): ReactElement => {
  const { footer, flex, link } = useFooterStyles();
  return (
    <Box component='footer' className={footer}>
      <Container>
        <FlexBoxStyled className={flex}>
          <BaseBoxStyled width='fit-content'>
            <BaseTextStyled color='white'>{APP_NAME}</BaseTextStyled>
          </BaseBoxStyled>
          <BaseBoxStyled width='fit-content'>
            <Link className={link} href={GITHUB_LINK} target='_blank'>
              {AUTHOR_NAME}
            </Link>
          </BaseBoxStyled>
          <BaseBoxStyled width='fit-content'>
            <BaseTextStyled color='white'>
              &copy; {PUBLISHED_YEAR}
            </BaseTextStyled>
          </BaseBoxStyled>
        </FlexBoxStyled>
      </Container>
    </Box>
  );
};
