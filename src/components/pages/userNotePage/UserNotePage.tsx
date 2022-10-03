import { FC, ReactElement } from 'react';
import { useLocation } from 'react-router-dom';

import { Box } from '@material-ui/core';

import { NoteType } from 'src/store/notes';

import { MainContainer, NoteCard } from 'src/components/common';

import { useStyles } from './styles';

export const UserNotePage: FC = (): ReactElement => {
  const { root } = useStyles();
  const location = useLocation();
  const note = location.state as NoteType;
  return (
    <MainContainer pageTitle={note.title} isSubheadingSection={false}>
      <Box className={root}>
        <NoteCard note={note} isText={true} isPartTagsDisplay={false} />
      </Box>
    </MainContainer>
  );
};
