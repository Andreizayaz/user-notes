import { FC, ReactElement } from 'react';
import { Link } from 'react-router-dom';

import { NoteType } from 'src/store/notes';

import { NoteCard } from 'src/components/common/noteCard';
import { FlexBoxStyled } from 'src/components/styledComponents';
import { NOTE_LINK } from 'src/constants';

type NotesListPropsTypes = {
  userNotes: NoteType[];
};

export const NotesList: FC<NotesListPropsTypes> = ({
  userNotes
}): ReactElement => (
  <FlexBoxStyled
    rowGap='5px'
    columnGap='5px'
    style={{ marginTop: '50px' }}
    justifyContent='center'
  >
    {userNotes.map((note) => (
      <Link
        key={note.id}
        to={`${NOTE_LINK}/${note.id}`}
        state={note}
        style={{
          alignSelf: 'stretch',
          width: '33%',
          transition: 'all 1s'
        }}
      >
        <NoteCard note={note} width='100%' />
      </Link>
    ))}
  </FlexBoxStyled>
);
