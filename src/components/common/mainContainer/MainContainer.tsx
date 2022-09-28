import { FC, ReactElement, ReactNode } from 'react';
import { Helmet } from 'react-helmet';

import { Box } from '@material-ui/core';

import { Container } from 'src/components/common';
import { ToolBar } from 'src/components/sections';

type MainContainerPropsTypes = {
  title: string;
  children: NonNullable<ReactNode>;
  isToolBar?: boolean;
};

export const MainContainer: FC<MainContainerPropsTypes> = ({
  children,
  isToolBar = true,
  title
}): ReactElement => (
  <>
    <Helmet>
      <title>{title}</title>
    </Helmet>
    <Box component='main'>
      <Container>
        {isToolBar && <ToolBar />}
        {children}
      </Container>
    </Box>
  </>
);
