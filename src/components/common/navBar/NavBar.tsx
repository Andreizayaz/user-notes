import { FC, ReactElement } from 'react';

import { Box } from '@material-ui/core';

import {
  FlexBoxStyled,
  BaseBoxStyled,
  LinkStyled
} from 'src/components/styledComponents';

import { NavLinksType } from './types';

import { useStyles } from './styles';

type NavBarPropsTypes = {
  links: NavLinksType[];
  addClasses?: string;
};

export const NavBar: FC<NavBarPropsTypes> = ({
  links,
  addClasses = ''
}): ReactElement => {
  const { nav, linksList } = useStyles();
  return (
    <Box component='nav' className={`${nav} ${addClasses}`}>
      <FlexBoxStyled className={linksList}>
        {links.map(({ href, linkName }) => (
          <BaseBoxStyled key={linkName} padding='10px' width='fit-content'>
            <LinkStyled to={href}>{linkName}</LinkStyled>
          </BaseBoxStyled>
        ))}
      </FlexBoxStyled>
    </Box>
  );
};
