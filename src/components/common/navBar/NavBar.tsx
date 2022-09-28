import { FC, ReactElement } from 'react';

import { Box, makeStyles } from '@material-ui/core';

import {
  FlexBoxStyled,
  BaseBoxStyled,
  LinkStyled
} from 'src/components/styledComponents';

import { NavLinksType } from './types';

const useStyles = makeStyles(() => ({
  nav: {
    width: '35%',
    minWidth: 'fit-content',
    marginLeft: 'auto'
  }
}));

type NavBarPropsTypes = {
  links: NavLinksType[];
};

export const NavBar: FC<NavBarPropsTypes> = ({ links }): ReactElement => {
  const { nav } = useStyles();
  return (
    <Box component='nav' className={nav}>
      <FlexBoxStyled>
        {links.map(({ href, linkName }) => (
          <BaseBoxStyled key={linkName} padding='10px' width='fit-content'>
            <LinkStyled to={href}>{linkName}</LinkStyled>
          </BaseBoxStyled>
        ))}
      </FlexBoxStyled>
    </Box>
  );
};
