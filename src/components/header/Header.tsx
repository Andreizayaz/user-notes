import { FC, ReactElement } from 'react';

import { AppBar } from '@material-ui/core';

import { Container, NavBar } from 'src/components/common';
import {
  FlexBoxStyled,
  ImageLinkStyled
} from 'src/components/styledComponents';

import { NavLinksType } from 'src/components/common/navBar/types';

import { HOME_LINK } from 'src/constants';

import { useStyles } from './styles';

type HeaderPropsTypes = {
  links: NavLinksType[];
};

export const Header: FC<HeaderPropsTypes> = ({ links }): ReactElement => {
  const { appBar } = useStyles();

  return (
    <AppBar component='header' className={appBar}>
      <Container>
        <FlexBoxStyled>
          <ImageLinkStyled
            to={HOME_LINK}
            sx={{
              marginRight: 'auto',
              border: 'none !important',
              backgroundImage: `url(${
                window.location.origin + '/user-notes-icon.png'
              })`,
              '&:hover': { transform: 'scale(1.1)' }
            }}
            height='50px'
            width='50px'
          />
          <NavBar links={links} />
        </FlexBoxStyled>
      </Container>
    </AppBar>
  );
};
