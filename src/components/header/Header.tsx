import { FC, ReactElement, useState } from 'react';

import { AppBar, Button } from '@material-ui/core';

import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

import { Container, NavBar } from 'src/components/common';
import {
  FlexBoxStyled,
  ImageLinkStyled
} from 'src/components/styledComponents';

import { NavLinksType } from 'src/components/common/navBar/types';

import { HOME_LINK } from 'src/constants';

import { useStyles } from './styles';
import { BurgerMenu } from './burgerMenu';
import { useBtnStyles } from '../sections/toolBar/styles';

type HeaderPropsTypes = {
  links: NavLinksType[];
};

export const Header: FC<HeaderPropsTypes> = ({ links }): ReactElement => {
  const { appBar, imgLink, burgerBtn, navLinks } = useStyles();
  const { root } = useBtnStyles();

  const [isOpen, setIsOpen] = useState(true);

  const closeHandler = () => setIsOpen(false);

  const toggleMenu = () => setIsOpen(!isOpen);

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
