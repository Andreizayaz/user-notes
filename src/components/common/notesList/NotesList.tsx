import { FC, ReactElement } from 'react';
import { Link } from 'react-router-dom';

import { NoteType } from 'src/store/notes';

import { NoteCard } from 'src/components/common/noteCard';
import { FlexBoxStyled } from 'src/components/styledComponents';

import { NOTE_LINK } from 'src/constants';

import { useListStyles } from 'src/global/styles';

type NotesListPropsTypes = {
  userNotes: NoteType[];
};

export const NotesList: FC<NotesListPropsTypes> = ({
  userNotes
}): ReactElement => {
  const { list, listItem } = useListStyles();

  return (
    <FlexBoxStyled
      rowGap='5px'
      columnGap='5px'
      style={{ marginTop: '50px' }}
      justifyContent='center'
      className={list}
    >
      {userNotes.map((note) => (
        <Link
          key={note.id}
          to={`${NOTE_LINK}/${note.id}`}
          state={note}
          className={listItem}
        >
          <NoteCard note={note} width='100%' />
        </Link>
      ))}
    </FlexBoxStyled>
  );
};
