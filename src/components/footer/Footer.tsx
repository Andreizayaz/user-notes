import { FC, ReactElement } from 'react';

import { Box, makeStyles } from '@material-ui/core';

import { Container } from 'src/components/common';
import {
  FlexBoxStyled,
  BaseBoxStyled,
  BaseTextStyled,
  LinkStyled
} from 'src/components/styledComponents';

import {
  APP_NAME,
  AUTHOR_NAME,
  PUBLISHED_YEAR,
  GITHUB_LINK
} from 'src/constants';

const useStyles = makeStyles(() => ({
  footer: {
    backgroundColor: '#1976d2'
  },
  link: {
    '&:hover': {
      color: '#FFD67F'
    }
  }
}));

export const Footer: FC = (): ReactElement => {
  const { footer, link } = useStyles();
  return (
    <Box component='footer' className={footer}>
      <Container>
        <FlexBoxStyled>
          <BaseBoxStyled width='fit-content'>
            <BaseTextStyled color='white'>{APP_NAME}</BaseTextStyled>
          </BaseBoxStyled>
          <BaseBoxStyled width='fit-content'>
            <LinkStyled className={link} to={GITHUB_LINK} target='_blank'>
              {AUTHOR_NAME}
            </LinkStyled>
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
