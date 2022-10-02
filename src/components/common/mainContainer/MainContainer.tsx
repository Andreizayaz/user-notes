import { FC, ReactElement, ReactNode } from 'react';
import { Helmet } from 'react-helmet';

import { Box, Typography } from '@material-ui/core';

import { Container, PageTitle } from 'src/components/common';
import { ToolBar } from 'src/components/sections';

import { useStyles } from './styles';
import { FlexBoxStyled } from 'src/components/styledComponents';

type MainContainerPropsTypes = {
  pageTitle: string;
  children: NonNullable<ReactNode>;
  isToolBar?: boolean;
  isUserNotes: boolean;
  isCreateLink?: boolean;
  yesNotes?: string;
  noNotes?: string;
  sectionTitle: string;
};

export const MainContainer: FC<MainContainerPropsTypes> = ({
  children,
  isToolBar = true,
  isCreateLink = true,
  pageTitle,
  sectionTitle,
  isUserNotes,
  yesNotes,
  noNotes
}): ReactElement => {
  const { heading, subHeadingSection } = useStyles();
  return (
    <>
      <Helmet>
        <title>{pageTitle}</title>
      </Helmet>
      <Box component='main'>
        <Container>
          <FlexBoxStyled flexDirection='column' rowGap='20px'>
            <Typography
              className={`${heading} ${subHeadingSection}`}
              component='h1'
              variant='h4'
            >
              {sectionTitle}
            </Typography>
            {isToolBar && <ToolBar />}
            <PageTitle
              isCreateLink={isCreateLink}
              isUserNotes={isUserNotes}
              noNotes={noNotes}
              yesNotes={yesNotes}
              subheadingSectionStyle={subHeadingSection}
            />
          </FlexBoxStyled>
          {children}
        </Container>
      </Box>
    </>
  );
};
