import { FC, ReactElement } from 'react';
import { useLocation, Navigate } from 'react-router-dom';

import { Box } from '@material-ui/core';

import { NoteType } from 'src/store/notes';

import { MainContainer, NoteCard } from 'src/components/common';

import { ERROR_PAGE_LINK } from 'src/constants';

import { useUserNotePageStyles } from 'src/global/styles';

export const UserNotePage: FC = (): ReactElement => {
  const { root } = useUserNotePageStyles();
  const location = useLocation();
  const note = location.state as NoteType;

  return (
    <>
      {note ? (
        <MainContainer pageTitle={note.title} isSubheadingSection={false}>
          <Box className={root}>
            <NoteCard note={note} isText={true} isPartTagsDisplay={false} />
          </Box>
        </MainContainer>
      ) : (
        <Navigate to={ERROR_PAGE_LINK} replace />
      )}
    </>
  );
};
