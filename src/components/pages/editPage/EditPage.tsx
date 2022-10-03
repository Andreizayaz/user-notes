import { FC, ReactElement } from 'react';
import { useLocation } from 'react-router-dom';

import { NoteType } from 'src/store/notes';

import { CardForm, MainContainer } from 'src/components/common';
import { FlexBoxStyled } from 'src/components/styledComponents';

export const EditPage: FC = (): ReactElement => {
  const location = useLocation();

  const note = location.state as NoteType;
  return (
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
  );
};
