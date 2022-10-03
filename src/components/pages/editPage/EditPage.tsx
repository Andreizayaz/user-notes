import { FC, ReactElement } from 'react';
import { Navigate, useLocation } from 'react-router-dom';

import { NoteType } from 'src/store/notes';

import { CardForm, MainContainer } from 'src/components/common';
import { FlexBoxStyled } from 'src/components/styledComponents';

import { ERROR_PAGE_LINK } from 'src/constants';

export const EditPage: FC = (): ReactElement => {
  const location = useLocation();

  const note = location.state as NoteType;
  return (
    <>
      {note ? (
        <MainContainer
          pageTitle={`${note.title} edit`}
          isSubheadingSection={true}
          isToolBar={false}
          sectionTitle='edit note'
          isUserNotes={true}
        >
          <FlexBoxStyled justifyContent='center' width='100%'>
            <CardForm isEdit currentNote={note} />
          </FlexBoxStyled>
        </MainContainer>
      ) : (
        <Navigate to={ERROR_PAGE_LINK} replace />
      )}
    </>
  );
};
