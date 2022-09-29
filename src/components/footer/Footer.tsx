import { FC, ReactElement } from 'react';

import { Box, Link, makeStyles } from '@material-ui/core';

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

const useStyles = makeStyles(() => ({
  footer: {
    backgroundColor: '#1976d2'
  },
  link: {
    color: 'white',
    fontSize: '18px',
    transition: 'all 1s',
    '&:hover': {
      color: '#FFD67F',
      textDecoration: 'none'
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
