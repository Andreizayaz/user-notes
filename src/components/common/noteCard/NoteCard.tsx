import { FC, ReactElement } from 'react';
import { useDispatch } from 'react-redux';

import { Card, CardHeader, CardContent, Typography } from '@material-ui/core';

import { editUserNote, NoteType } from 'src/store/notes';

import { TagsCloud } from 'src/components/common';

import { FlexBoxStyled } from 'src/components/styledComponents';

import { MAX_COUNT_TAGS_ON_CARD } from 'src/constants';

import { DateAndActBtns } from './DateAndActBtns';

import { useNoteCardStyles } from './styles';

type NoteCardPropsTypes = {
  note: NoteType;
  width?: string;
  isText?: boolean;
  isPartTagsDisplay?: boolean;
};

export const NoteCard: FC<NoteCardPropsTypes> = ({
  note,
  width = 'auto',
  isText = false,
  isPartTagsDisplay = true
}): ReactElement => {
  const { root, noteCard } = useNoteCardStyles();

  const dispatch = useDispatch();

  const handleDeleteTag = (tagText: string) => {
    const { parse, stringify } = JSON;
    const modifyNote = parse(stringify(note)) as NoteType;
    modifyNote.tagsList = note.tagsList.filter((tag) => tag !== tagText);
    modifyNote.text = note.text.replace(`#${tagText}`, ` ${tagText} `);
    dispatch(editUserNote(modifyNote));
  };

  return (
    <Card style={{ width: width }} className={noteCard}>
      <FlexBoxStyled flexDirection='column' height='100%' width='100%'>
        <DateAndActBtns
          note={note}
          dateCreation={new Date(note.dateCreation).toLocaleDateString()}
        />
        <CardHeader title={note.title} component='h3' className={root} />
        <CardContent
          style={{
            display: 'flex',
            flexDirection: 'column',
            rowGap: '20px',
            width: '100%',
            justifyContent: 'center'
          }}
        >
          {isText && (
            <Typography
              component='p'
              variant='h5'
              style={{ textAlign: 'center' }}
            >
              {note.text}
            </Typography>
          )}
          <TagsCloud
            width='100%'
            tags={
              isPartTagsDisplay
                ? note.tagsList.filter(
                    (_, index) => index < MAX_COUNT_TAGS_ON_CARD
                  )
                : note.tagsList
            }
            deleteTag={handleDeleteTag}
          />
        </CardContent>
      </FlexBoxStyled>
    </Card>
  );
};
