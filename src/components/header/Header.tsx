import { FC, ReactElement } from 'react';

import { AppBar, Button } from '@material-ui/core';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

import { Container, NavBar } from 'src/components/common';
import {
  FlexBoxStyled,
  ImageLinkStyled
} from 'src/components/styledComponents';
import { BurgerMenu } from './burgerMenu';

import { NavLinksType } from 'src/components/common/navBar/types';

import { HOME_LINK } from 'src/constants';

import { useHeaderStyles, useBtnToolBarStyles } from 'src/global/styles';

type HeaderPropsTypes = {
  links: NavLinksType[];
  isOpen: boolean;
  closeHandler: () => void;
  toggleMenu: () => void;
};

export const Header: FC<HeaderPropsTypes> = ({
  links,
  isOpen,
  closeHandler,
  toggleMenu
}): ReactElement => {
  const { appBar, imgLink, burgerBtn, navLinks } = useHeaderStyles();
  const { root } = useBtnToolBarStyles();

  return (
    <AppBar component='header' className={appBar}>
      <Container>
        <FlexBoxStyled position='relative'>
          <Button className={`${root} ${burgerBtn}`} onClick={toggleMenu}>
            {isOpen ? <CloseIcon /> : <MenuIcon />}
          </Button>
          <ImageLinkStyled to={HOME_LINK} className={imgLink} />
          <NavBar links={links} addClasses={`${navLinks}`} />
        </FlexBoxStyled>
        <BurgerMenu isOpen={isOpen} closeHandler={closeHandler}>
          <NavBar links={links} />
        </BurgerMenu>
      </Container>
    </AppBar>
  );
};
